import '../styles/colors.scss'
import '../styles/global.scss'
import {setupApolloClient} from '../lib/network/network'
import { ApolloProvider } from '@apollo/react-hooks'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = function ({Component, pageProps, apollo}) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default setupApolloClient(App)