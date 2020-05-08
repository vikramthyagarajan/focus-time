import '../styles/colors.scss'
import '../styles/global.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}