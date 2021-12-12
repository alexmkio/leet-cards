import type { NextPage } from 'next'
import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: NextPage = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen dark:text-gray-50">
      <Header />
      <main className="flex-grow pt-16 bg-gray-200 dark:bg-gray-900">
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout