import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
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
