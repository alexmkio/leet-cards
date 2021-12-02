import Image from 'next/image'
import gitHubDark from '../images/flash_cards.png'

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="w-12 md:w-16">
        <Image
          alt="GitHub icon"
          src={gitHubDark}
          layout="responsive"
          width={560}
          height={450}
        />
      </div>
      <h1 className="font-header text-4xl md:text-5xl text-center p-4 md:p-6">Leet Code</h1>
    </header>
  )
}