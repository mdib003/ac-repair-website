import { Footer } from '@component/src/components/Footer'
import { Navigation } from '@component/src/components/Navigation'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className='flex justify-between flex-col min-height-100'>
      <div>
        <Navigation />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
}
