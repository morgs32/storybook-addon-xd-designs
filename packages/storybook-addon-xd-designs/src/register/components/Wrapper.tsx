/** @jsx jsx */
import { Fragment, SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED, STORY_RENDERED } from '@storybook/core-events'

import { Link, Placeholder, TabsState } from '@storybook/components'

import { Config } from '../../config'
import { Events, ParameterName } from '../../addon'

import { XD } from './XD'

interface Props {
  channel: ReturnType<typeof addons['getChannel']>

  api: any

  active: boolean
}

export const Wrapper: SFC<Props> = ({ active, api, channel }) => {
  const [config, setConfig] = useState<Config | Config[]>()
  const [storyId, changeStory] = useState<string>()

  useEffect(() => {
    const onStoryChanged = (id: string) => {
      changeStory(id)
      const newConfig = api.getParameters(id, ParameterName)
      if (newConfig !== config) {
        setConfig(newConfig)
      }
    }

    const handleInitialRender = (id: string) => {
      onStoryChanged(id);
      channel.removeListener(STORY_CHANGED, handleInitialRender)
    }
    channel.on(Events.UpdateConfig, setConfig)
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

  if (!config || ('length' in config && config.length === 0)) {
    return (
      <Placeholder>
        <Fragment>No designs found</Fragment>
        <Fragment>
          Learn how to{' '}
          <Link
            href="https://github.com/pocka/storybook-addon-xd-designs#usage"
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

  const panels = [...(config instanceof Array ? config : [config])].map<
    [JSX.Element, { id: string; title: string }]
  >((cfg, i) => {
    const meta = {
      id: `addon-designs-tab--${i}`,
      title: cfg.name || 'XD Design',
    }

    return [<XD config={cfg} />, meta]

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
