import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { ThemeProvider } from '../context/ThemeContext'
import { DeckProvider } from '../context/DeckContext'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DeckProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DeckProvider>
  )
}