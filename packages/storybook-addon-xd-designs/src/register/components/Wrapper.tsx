/** @jsx jsx */
import { Fragment, SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED, STORY_RENDERED } from '@storybook/core-events'

import { Link, Placeholder, TabsState } from '@storybook/components'

import { XDConfig } from '../../config'
import { Events, ParameterName } from '../../addon'

import { XD } from './XD'

interface Props {
  channel: ReturnType<typeof addons['getChannel']>

  api: any

  active: boolean
}

export const Wrapper: SFC<Props> = ({ active, api, channel }) => {
  const [config, setConfig] = useState<XDConfig | XDConfig[]>()
  const [storyId, changeStory] = useState<string>()

  useEffect(() => {
    const onStoryChanged = (id: string) => {
      changeStory(id)
      const newConfig = api.getParameters(id, ParameterName)
      if (newConfig !== config) {
        setConfig(newConfig);
      }
    }

    const handleInitialRender = (id: string) => {
      onStoryChanged(id);
      channel.removeListener(STORY_CHANGED, handleInitialRender)
    }
    channel.on(Events.UpdateConfig, (config) => {
      if (config === '_undefined_') {
        setConfig(void 0)
      }
    })
    channel.on(STORY_CHANGED, onStoryChanged)
    channel.on(STORY_RENDERED, handleInitialRender)

    return () => {
      channel.removeListener(Events.UpdateConfig, setConfig)
      channel.removeListener(STORY_CHANGED, onStoryChanged)
    }
  }, [])


  if (!active || !storyId) {
    return null
  }

  if (
    !config
    || (Array.isArray(config) && config.length && config.length === 0)
  ) {
    return (
      <Placeholder>
        <div style={{ paddingBottom: 4 }}>No designs found</div>
        <Fragment>
          Learn how to{' '}
          <Link
            href="https://github.com/morgs32/storybook-addon-xd-designs#usage"
            target="_blank"
            rel="noopener"
            withArrow
            cancel={false}
          >
            display design preview for the story
          </Link>
        </Fragment>
      </Placeholder>
    )
  }


  let configs : XDConfig[];
  if (Array.isArray(config)) {
    configs = config;
  }
  else {
    configs = [config];
  }

  const panels = configs.map<
    [JSX.Element, { id: string; title: string }]
  >((config: XDConfig, i) => {
    const meta = {
      id: `addon-designs-tab--${i}`,
      title: config.name || 'XD Design',
    }

    return [<XD config={config} />, meta]

  })

  if (panels.length === 1) {
    return <div key={storyId}>{panels[0][0]}</div>
  }

  return (
    <TabsState key={storyId} absolute={true} initial={panels[0][1].id}>
      {panels.map(([el, meta]) => (
        <div key={meta.id} id={meta.id} title={meta.title}>
          {el}
        </div>
      ))}
    </TabsState>
  )
}

export default Wrapper
