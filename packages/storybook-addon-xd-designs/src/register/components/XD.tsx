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


    return {
      isValid: false,
      specUrl: config.specUrl,
      screenUrl
    }
  }, [config.specUrl, config.reviewUrl, config.embedHost])


  if (!config.isValid) {
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
      <div css={$utility}>
        <a
          href={iframeConfig.specUrl}
          target="_blank"
        >
          Go to spec
        </a>
      </div>
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
  height: 26px;
  font-weight: bold;
  color: rebeccapurple;
  line-height: 26px;
  text-align: center; 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: papayawhip;
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
