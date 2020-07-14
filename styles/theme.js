import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  "light": "#f6f5f8",
  "dark": "#5f6679",
  "lightSecondary": "#dcdae0",
  "darkSecondary": "#4c4f59",
  "lightTertiary": "#9d9d9d",
  "darkTertiary": "#1d1e22",
  "lightLight": "#ffffff",
  "darkLight": "#ffffff",
  "accent": "#ffe082",
  "accentSecondary": "#ffedb5",
  "primary": "#AA5440",
  // "primary": "#82c0a9",
  "info": "#d1d0ca",
  "success": "#5cb46b",
  "warning": "#daa433",
  "danger": "#f44336",
  "primarySecondary": "#ffffff",
  "infoSecondary": "#ffffff",
  "successSecondary": "#c5e4ca",
  "warningSecondary": "#f1deb4",
  "dangerSecondary": "#fccbc7"
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