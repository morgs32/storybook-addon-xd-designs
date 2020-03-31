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
  specUrl: string,

  isValid: boolean,
}

/**
 * Render Adobe XD Live Preview.
 */
export type XDConfig = IFrameConfigBase & {
  specUrl: string,
  reviewUrl: string,

  /**
   * A string identifies your site.
   */
  embedHost?: string
}
