import React from 'react'
import { storiesOf } from '@storybook/react'
import { withXD } from 'storybook-addon-xd-designs'

import { Button } from './Button'

storiesOf('Internal use only|Tests', module)
  .addDecorator(withXD)
  .add('No `design` parameter', () => (
    <Button>Button</Button>
  ))
  .add('Bad config', () => <Button>Button</Button>,
    {
      design: {}
    }
  )
