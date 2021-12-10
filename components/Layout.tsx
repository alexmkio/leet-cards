import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen dark:text-gray-50">
      <Header />
      <main className="flex-grow bg-gray-200 dark:bg-gray-900">
        { children }
      </main>
      <Footer />
    </div>
  )
}