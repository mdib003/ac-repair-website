import { Navigation } from '@component/src/components/Navigation'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navigation></Navigation>
  <Component {...pageProps} />
  </>
}
