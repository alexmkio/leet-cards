import Link from 'next/link'
import Image from 'next/image'
import gitHubDark from '../images/github_dark.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 flex justify-around items-center">
      <h2 className="font-header text-2xl md:text-3xl text-center p-4 md:p-6">
        Built by:&nbsp;
        <a href="https://www.linkedin.com/in/alexkio/" target="_blank">
          Alex Kio
        </a>
      </h2>
      <div className="w-12 md:w-16">
        <a href="https://github.com/alexmkio/leet-cards" target="_blank">
          <Image
            alt="GitHub icon"
            src={gitHubDark}
            layout="responsive"
            width={120}
            height={120}
          />
        </a>
      </div>
      <Link href='/add'>
        <a>
          <h2 className="font-header text-2xl md:text-3xl text-center p-4 md:p-6">Add a flash card</h2>
        </a>
      </Link>
    </footer>
  )
}