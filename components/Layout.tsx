import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow bg-gray-100">
        { children }
      </main>
      <Footer />
    </div>
  )
}