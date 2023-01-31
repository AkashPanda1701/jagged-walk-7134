import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

// import "../components/Navbar/nav.css";
// import '../components/Home/home.css'

// Don't make any changes to this file.

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  </SessionProvider>;
}

export default MyApp;
