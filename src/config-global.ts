import packageJson from '../package.json'

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string
  appVersion: string
  maxWidth: number
}

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'MentaCare',
  appVersion: packageJson.version,
  maxWidth: 1280
}
