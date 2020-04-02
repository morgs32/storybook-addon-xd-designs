<div align="center">
  
[![npm version](https://badge.fury.io/js/storybook-addon-xd-designs.svg)](https://badge.fury.io/js/storybook-addon-xd-designs)
[![Monthly download](https://img.shields.io/npm/dm/storybook-addon-xd-designs.svg)](https://www.npmjs.com/package/storybook-addon-xd-designs)
[![GitHub license](https://img.shields.io/github/license/pocka/storybook-addon-xd-designs.svg)](https://github.com/pocka/storybook-addon-xd-designs/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

</div>

<hr/>

# storybook-addon-xd-designs

A storybook addon that embeds 
Adobe XD specs in your addon panel for better design-development workflow.

- [Demo](https://morgs32.github.io/storybook-addon-xd-designs)

## Credit
- Forked from https://github.com/pocka/storybook-addon-designs

## Requirements

- [storybook](https://github.com/storybooks/storybook)@>=5.0.0

This addon should work well with any framework.
If not, open an issue.

## Getting started

1. Install
    ```sh
    npm install --save-dev storybook-addon-xd-designs
    ```
    or 
    ```sh
    yarn add -D storybook-addon-xd-designs
    ```
    Make sure you have these peer dependencies installed:
    - `@storybook/addons` 
    - `@storybook/components`
    - `@storybook/theming`
    
2. Register the addon in `addons.js`
    ```js
    // .storybook/addons.js
    
    import 'storybook-addon-xd-designs/register'
    ```
3. Add your spec to the story!

    ```js
    import { withXD } from 'storybook-addon-xd-designs'
    
    storiesOf('My stories', module)
      .addDecorator(withXD)
      .add('My awesome story', () => <Button>Hello, World!</Button>, {
        design: {
          artboardUrl: 'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop',
        }
      })

       // Or, if it's 2019, you would have to use two urls like this:
      .add('My awesome story', () => <Button>Hello, World!</Button>, {
        design: {
          specUrl: 'https://xd.adobe.com/spec/181eaf80-9e7a-4ea6-7dc8-e21dfd9b2d80-6e2f/screen/58270c9e-502b-4737-be32-a5dfe9523bb5/Color/',
          reviewUrl: 'https://xd.adobe.com/view/813cbece-c467-47ce-67e3-b60caacc2ff8-f70d/',
        }
      })
    ```
   
## How to make and find your `spec` url.

### Circa 2020
[Detailed instructions here.](https://xd.adobe.com/view/7377f55a-1dfe-469a-64a2-8a8f8d907c01-0546/?fullscreen) 

In short, create a "Development" url to share. Then view it in a browser, find the specific page you want to use
in storybook, and copy that URL.

[![How To](./Circa2020.png)](https://xd.adobe.com/view/7377f55a-1dfe-469a-64a2-8a8f8d907c01-0546/?fullscreen)


### Circa 2019 you had to get 2 urls
[Detailed instructions here.](https://xd.adobe.com/view/9c3f3303-01b1-444b-6615-52a130609138-ea0e/) It looks something like this:

[![How To](./Group607.png)](https://xd.adobe.com/view/9c3f3303-01b1-444b-6615-52a130609138-ea0e/)


## Usage

Add `withXD` decorator then put `design` parameter after your story.

> NOTE: If you omit `design` parameter, the addon does nothing.

## Similar projects

- [storybook-addon-designs](https://github.com/pocka/storybook-addon-designs)
