import React from 'react'

import { storiesOf } from '@storybook/react'
import { config, withXD } from 'storybook-addon-xd-designs'

import { Button } from './Button'

const reviewUrl = 'https://xd.adobe.com/view/813cbece-c467-47ce-67e3-b60caacc2ff8-f70d/'
const specUrl = 'https://xd.adobe.com/spec/181eaf80-9e7a-4ea6-7dc8-e21dfd9b2d80-6e2f/screen/58270c9e-502b-4737-be32-a5dfe9523bb5/Buttons/'

storiesOf('Examples|withXD', module)
  .addDecorator(withXD)
  .add('In 2019', () => {
    return (
      <>
        <h1>
          Back in 2019, you had a separate spec url and review url.
        </h1>
        <Button>Button</Button>
      </>
    )
  }, {
    design: config({
      specUrl,
      reviewUrl
    })
  })
