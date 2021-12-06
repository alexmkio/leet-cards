import Link from 'next/link'
import Image from 'next/image'
import gitHubDark from '../images/github_dark.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 flex justify-between items-center p-4 md:p-6 md:px-40">
      <h2 className="font-header text-2xl md:text-3xl text-center">
        Built by:&nbsp;
        <a href="https://www.linkedin.com/in/alexkio/" target="_blank" rel="noreferrer" className="transition duration-300 ease-in-out hover:text-red-500">
          Alex Kio
        </a>
      </h2>
      <div className="w-12 md:w-16">
        <a href="https://github.com/alexmkio/leet-cards" target="_blank" rel="noreferrer">
          <Image
            alt="GitHub icon"
            src={gitHubDark}
            layout="responsive"
            width={120}
            height={120}
          />
        </a>
      </div>
    </footer>
  )
}