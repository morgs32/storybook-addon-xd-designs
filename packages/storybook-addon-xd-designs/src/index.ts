import addons, { makeDecorator, StoryWrapper } from '@storybook/addons'

import { Events, ParameterName } from './addon'
import { XDConfig } from './config'

const wrapper: StoryWrapper = (getStory, context, { parameters }) => {
  const channel = addons.getChannel()

  channel.emit(Events.UpdateConfig, parameters)

  return getStory(context)
}

export const withXD = makeDecorator({
  name: 'withXD',
  parameterName: ParameterName,
  wrapper
})

/**
 * Dumb function to ensure typings or enhance IDE auto completion.
 */
export const config = (c: XDConfig | XDConfig[]) => c

// if (module && module.hot && module.hot.decline) {
//   module.hot.decline()
// }
