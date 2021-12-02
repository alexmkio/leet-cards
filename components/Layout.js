import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        { children }
      </main>
      <Footer />
    </div>
  )
}