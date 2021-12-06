import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import gitHubDark from '../images/flash_cards.png'

export default function Header() {
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
  return (
    <header className="flex flex-col p-2 md:p-4 md:flex-row md:justify-between md:px-40 items-center bg-gray-50 shadow-md sticky top-0 z-50 opacity-90">
      {logo}
      <Link href='/add'>
        <a>
          <h2 className="font-header text-2xl md:text-3xl transition duration-300 ease-in-out hover:text-red-500">Add a flash card</h2>
        </a>
      </Link>
    </header>
  )
}