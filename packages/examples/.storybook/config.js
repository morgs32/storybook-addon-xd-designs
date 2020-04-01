import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'

import pkg from 'storybook-addon-xd-designs/package.json'
import React from 'react'

addParameters({
  options: {
    theme: create({
      brandTitle: 'storybook-addon-xd-designs',
      brandUrl: pkg.homepage
    })
  }
})

addDecorator((getStory) => {
  return (
    <div
      style={{
        margin: 20
      }}
    >
      {getStory()}
    </div>
  )
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
