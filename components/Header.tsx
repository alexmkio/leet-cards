import Link from 'next/link'
import Image from 'next/image'
import gitHubDark from '../images/flash_cards.png'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-40 bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <div className="w-12 md:w-16">
          <Image
            alt="GitHub icon"
            src={gitHubDark}
            layout="responsive"
            width={560}
            height={450}
          />
        </div>
        <h1 className="font-header text-4xl md:text-5xl p-2 md:p-4">Leet Code</h1>
      </div>
      <Link href='/add'>
        <a>
          <h2 className="font-header text-2xl md:text-3xl">Add a flash card</h2>
        </a>
      </Link>
    </header>
  )
}