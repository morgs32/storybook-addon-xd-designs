<div align="center">
  
[![npm version](https://badge.fury.io/js/storybook-addon-xd-designs.svg)](https://badge.fury.io/js/storybook-addon-xd-designs)
[![Monthly download](https://img.shields.io/npm/dm/storybook-addon-xd-designs.svg)](https://www.npmjs.com/package/storybook-addon-xd-designs)
[![GitHub license](https://img.shields.io/github/license/pocka/storybook-addon-xd-designs.svg)](https://github.com/pocka/storybook-addon-xd-designs/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

</div>

<hr/>

## storybook-addon-xd-designs

A [Storybook](https://github.com/storybooks/storybook) addon that embeds 
Adobe XD specs in your addon panel for better design-development workflow.

- [Demo](https://morgs32.github.io/storybook-addon-xd-designs)

## Requirements

- Storybook@>=5.0.0

This addon should work well with any framework.
If you find the case the addon not works, please open an issue.

## Getting started

1. Install

```sh
npm install --save-dev storybook-addon-xd-designs
```
or 
```sh
yarn add -D storybook-addon-xd-designs
```

2. Register the addon in `addons.js`

```js
// .storybook/addons.js

import 'storybook-addon-xd-designs/register'
```

3. Add it to story!

```js
import { withXD } from 'storybook-addon-xd-designs'

storiesOf('My stories', module)
  .addDecorator(withXD)
  .add('My awesome story', () => <Button>Hello, World!</Button>, {
    design: {
      specUrl: '',
      reviewUrl: '',
    }
  })
```

## Usage

Add `withXD` decorator then put `design` parameter after your story.

> NOTE: If you omit `design` parameter, the addon does nothing.

### Multiple designs for single story

You can attach more than one designs by passing array of config to `design` parameter.

```js
design: [
  {
    type: 'pdf',
    url: 'https://my-pdf'
  },
  {
    // Specify tab name by passing "name" prop
    name: 'Image Preview',
    type: 'image',
    url: 'https://my-image'
  }
]
```

## Similar projects

- [storybook-addon-designs](https://github.com/pocka/storybook-addon-designs)
