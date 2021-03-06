/** @jsx jsx */
import { Fragment, SFC, useMemo } from 'react'
import { css, jsx } from '@storybook/theming'

import { IFrameConfigBase, XDConfig } from '../../config'
import { Link, Placeholder } from '@storybook/components'

const _get = require('lodash/get')

export const parseReviewUrl = (url: string) =>
  url && url.match(/https:\/\/xd.adobe.com\/view\/([0-9a-zA-Z-]{22,128})/)
export const parseSpecUrl = (url: string) =>
  url && url.match(/https:\/\/xd.adobe.com\/spec\/[0-9a-zA-Z-]{22,128}\/screen\/([0-9a-zA-Z-]{22,128})\/([^\/]*)\/?$/)

export const parseArtboardUrl = (url: string) =>
  url && url.match(/https:\/\/xd.adobe.com\/view\/([0-9a-zA-Z-]{22,128})\/screen\/([0-9a-zA-Z-]{22,128})\/([^\/]*)\/?$/)

interface Props {
  config: XDConfig
}

export const XD: SFC<Props> = ({ config }) => {


  const iframeConfig = useMemo<IFrameConfigBase>(() => {

    if ('artboardUrl' in config) {

      const parsedArtboardUrl = parseArtboardUrl(config.artboardUrl)
      const viewId = _get(parsedArtboardUrl, '1')
      const screenId = _get(parsedArtboardUrl, '2')
      const artboard = _get(parsedArtboardUrl, '3')
      const isValid = Boolean(viewId && screenId && artboard)

      return {
        isValid,
        specUrl: config.artboardUrl,
        screenUrl: `https://xd.adobe.com/embed/${viewId}/screen/${screenId}/${artboard}?fullscreen`
      }
    }


    const parsedReviewUrl = parseReviewUrl(config.reviewUrl)
    const parsedSpecUrl = parseSpecUrl(config.specUrl)
    const reviewId = _get(parsedReviewUrl, '1')
    const screenId = _get(parsedSpecUrl, '1')
    const artboard = _get(parsedSpecUrl, '2')
    const isValid = Boolean(reviewId && screenId && artboard)
    const screenUrl = isValid ? `https://xd.adobe.com/embed/${reviewId}/screen/${screenId}/${artboard}?fullscreen` : ''

    return {
      isValid,
      specUrl: config.specUrl,
      screenUrl
    }
  }, [config])

  if (!iframeConfig.isValid) {
    return (
      <Placeholder>
        <div style={{ paddingBottom: 4 }}>Invalid config type</div>
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
        Visit spec in Adobe XD <span className="XD__rightArrow">→</span>
      </a>
    </div>
  )
}

const $iframeContainer = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
const $utility = css`
  box-shadow: 0px 6px 8px 2px #333;
  height: 26px;
  font-family: sans-serif;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 200% auto;
  will-change: background-position;
  transition: background-position .4s ease;
  color: white;
  text-decoration: none;

  .XD__rightArrow {
    position: relative;
    left: 0px;
    will-change: left;
    transition: left .3s ease;
  }

  &:hover {
    background-position: right center;

    .XD__rightArrow {
      left: 5px;
    }
  }
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
  margin-bottom: 0;
  z-index: 1;
`
