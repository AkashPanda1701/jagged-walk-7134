
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

// Don't make any changes to this file. 

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </ChakraProvider>

}

export default MyApp
