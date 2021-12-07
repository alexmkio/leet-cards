import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'
import gitHubDark from '../images/flash_cards.png'

export default function Header() {
  const { darkMode, changeTheme } = useTheme()
  const router = useRouter()

  let appLogo = 
    <div className="w-12 md:w-16">
      <Image
        alt="GitHub icon"
        src={gitHubDark}
        layout="responsive"
        width={560}
        height={450}
      />
    </div>

  let logo
  if (router.pathname === "/") {
    logo = 
      <div className="flex items-center pb-2 md:pb-0">
        {appLogo}
        <h1 className="font-header text-4xl md:text-5xl pl-2 md:pl-4">Leet Code</h1>
      </div>
  } else {
    logo =
      <Link href='/'>
        <a>
          <div className="flex items-center pb-2 md:pb-0 transition duration-300 ease-in-out hover:text-red-500">
            {appLogo}
            <h1 className="font-header text-4xl md:text-5xl pl-2 md:pl-4">Leet Code</h1>
          </div>
        </a>
      </Link>
  }


  let modeIcon
  if (darkMode) {
    modeIcon = 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
  } else {
    modeIcon =
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
  }

  return (
    <header className="flex flex-col p-2 md:p-4 md:flex-row md:justify-between md:px-40 items-center bg-gray-50 dark:bg-gray-800 shadow-md sticky top-0 z-50 opacity-90">
      {logo}
      <div onClick={() => changeTheme()}>
        {modeIcon}
      </div>
      <Link href='/add'>
        <a>
          <h2 className="font-header text-2xl md:text-3xl transition duration-300 ease-in-out hover:text-red-500">Add a flash card</h2>
        </a>
      </Link>
    </header>
  )
}