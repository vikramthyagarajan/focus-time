import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  light: "#f7f8f6",
  dark: "#3a5f5a",
  lightSecondary: "#dddedd",
  darkSecondary: "#293d3b",
  lightTertiary: "#9e9e9e",
  darkTertiary: "#000000",
  lightLight: "#ffffff",
  darkLight: "#ffffff",
  accent: "#a4756a",
  accentSecondary: "#b7928a",
  primary: "#82c0a9",
  info: "#87937a",
  success: "#5cb46b",
  warning: "#daa433",
  danger: "#f44336",
  primarySecondary: "#ffffff",
  infoSecondary: "#d3d8ce",
  successSecondary: "#c5e4ca",
  warningSecondary: "#f1deb4",
  dangerSecondary: "#fccbc7"
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.primary,
      contrastText: palette.primarySecondary
    },
    error: {
      main: palette.danger
    },
    warning: {
      main: palette.warning
    },
    info: {
      main: palette.info
    },
    secondary: {
      main: palette.accent
    },
  }
})