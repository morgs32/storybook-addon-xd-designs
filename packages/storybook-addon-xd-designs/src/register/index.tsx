/** @jsx jsx */
import addons from '@storybook/addons'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName } from '../addon'

import { Wrapper } from './components/Wrapper'

export default function register() {
  addons.register(AddonName, api => {
    addons.addPanel(PanelName, {
      title: 'XD Design',
      render({ active, key }) {
        return (
          <Wrapper
            key={key}
            channel={addons.getChannel()}
            api={api}
            active={active}
          />
        )
      }
    })
  })
}
