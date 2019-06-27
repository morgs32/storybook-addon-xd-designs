/** @jsx jsx */
import { Fragment, SFC, useMemo } from 'react'
import { css, jsx } from '@storybook/theming'

import { XDConfig, IFrameConfigBase } from '../../config'
import { Link, Placeholder } from '@storybook/components'

const _get = require('lodash/get')

const parseReviewUrl = (url: string) =>
  url && url.match(/https:\/\/xd.adobe.com\/view\/(?<reviewId>[0-9a-zA-Z-]{22,128})/)
const parseSpecUrl = (url: string) =>
  url && url.match(/https:\/\/xd.adobe.com\/spec\/(?<specId>[0-9a-zA-Z-]{22,128})\/screen\/(?<screenId>[0-9a-zA-Z-]{22,128})\/(?<artboard>[^\/]*)\/?$/)

interface Props {
  config: XDConfig
}

export const XD: SFC<Props> = ({ config }) => {

  const iframeConfig = useMemo<IFrameConfigBase>(() => {

    const parsedReviewUrl = parseReviewUrl(config.reviewUrl)
    const parsedSpecUrl = parseSpecUrl(config.specUrl)

    const reviewId = _get(parsedReviewUrl, 'groups.reviewId')
    const screenId = _get(parsedSpecUrl, 'groups.screenId')
    const artboard = _get(parsedSpecUrl, 'groups.artboard')
    const isValid = Boolean(reviewId && screenId && artboard)
    const screenUrl = isValid ? `https://xd.adobe.com/embed/${reviewId}/screen/${screenId}/${artboard}?fullscreen` : ''

    console.log('reviewId, artboard, screenId', reviewId, artboard, screenId)

    return {
      isValid,
      specUrl: config.specUrl,
      screenUrl
    }
  }, [config.specUrl, config.reviewUrl, config.embedHost])

  if (!iframeConfig.isValid) {
    return (
      <Placeholder>
        <Fragment>Invalid config type</Fragment>
        <Fragment>
          That design config is not valid. Please check the {' '}
          <Link
            href="https://github.com/morgs32/storybook-addon-xd-designs"
            target="_blank"
            rel="noopener"
            withArrow
            cancel={false}
          >
            documentation
          </Link>
        </Fragment>
      </Placeholder>
    )
  }

  return (
    <div css={$container}>
      <Placeholder css={$loading}>Loading...</Placeholder>
      <div css={$iframeContainer}>
        <iframe
          css={$iframe}
          src={iframeConfig.screenUrl}
          allowFullScreen
        />
      </div>
      <a
        css={$utility}
        href={iframeConfig.specUrl}
        target="_blank"
      >
        Go
        to spec
      </a>
    </div>
  )
}

const $iframeContainer = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: -70px;
`
const $utility = css`
  box-shadow: 0px 6px 8px 2px #333;
  height: 26px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 26px;
  text-align: center; 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
  color: white;
  text-decoration: none;
`

const $container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`

const $loading = css`
  position: absolute;
  top: 75%;
  left: 50%;

  transform: translate(-50%, -50%);
`

const $iframe = css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  margin-bottom: 96px;
  z-index: 1;
`
