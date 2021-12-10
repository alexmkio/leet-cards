import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DeckProvider } from '../context/DeckContext'
import Layout from '../components/Layout'
import { ThemeProvider } from '../context/ThemeContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DeckProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DeckProvider>
    </ThemeProvider>
  )
}