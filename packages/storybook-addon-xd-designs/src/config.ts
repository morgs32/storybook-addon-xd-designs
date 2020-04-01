export type Config = XDConfig

export interface ConfigBase {
  /**
   * A name of the tab.
   */
  name?: string
}

/**
 * Options for rendering iframe.
 */
export interface IFrameConfigBase extends ConfigBase {
  /**
   * The URL to show.
   */
  screenUrl: string
  /**
   * The URL to open in a new tab
   */
  specUrl: string

  isValid: boolean
}

/**
 * Render Adobe XD Live Preview.
 */
export interface XDConfig2019 extends IFrameConfigBase {
  specUrl: string
  reviewUrl: string

  /**
   * A string identifies your site.
   */
  embedHost?: string
}

export interface XDConfig2020 extends IFrameConfigBase {
  artboardUrl: string
}

export type XDConfig = XDConfig2020 | XDConfig2019;
