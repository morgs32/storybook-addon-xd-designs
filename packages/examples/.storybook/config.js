import { addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'

import pkg from 'storybook-addon-xd-designs/package.json'

addParameters({
  options: {
    theme: create({
      brandTitle: 'storybook-addon-xd-designs',
      brandUrl: pkg.homepage
    })
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
