import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { DeckProvider } from '../context/DeckContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DeckProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DeckProvider>
  )
}

export default MyApp