import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react"

import { Provider } from "next-auth/client"
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthenticationGate from '../src/components/auth/AuthenticationGate'

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "../styles/theme"


export const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider session={pageProps.session}>
          {/* <AuthenticationGate> */}
            <Component {...pageProps} />
          {/* </AuthenticationGate> */}
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default MyApp
