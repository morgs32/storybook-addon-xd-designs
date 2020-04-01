import React from 'react'

import { storiesOf } from '@storybook/react'
import { config, withXD } from 'storybook-addon-xd-designs'

import { Button } from './Button'

const artboardUrl = 'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop'

storiesOf('Examples|withXD', module)
  .addDecorator(withXD)
  .add('In 2020', () => {
    return (
      <>
        <h1>
          Back in when you had separate spec url and a review url.
        </h1>
        <Button>Button</Button>
      </>
    )
  }, {
    design: config({
      artboardUrl,
    })
  })
