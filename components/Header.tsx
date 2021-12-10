import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const router = useRouter()
  const { darkMode, changeTheme } = useTheme()

  let appLogo = 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 100 100" fill="currentColor" stroke="currentColor">
      <path d="M22.7812366,79.1270218c-0.6308212,0.1043701-1.2727947,0.1572723-1.9081192,0.1572723   c-5.704196,0-10.5212536-4.0898438-11.453722-9.7248764l-1.048811-6.3381882v14.1958771   c0,5.029068,4.0768538,9.1059265,9.1059227,9.1059265h61.6682968c5.029068,0,9.1059189-4.0768585,9.1059189-9.1059265v-9.2003708   c-0.4101028,0.1154251-0.8283997,0.2136536-1.2582626,0.2847672L22.7812366,79.1270218z"/><path d="M96.3572617,53.8293152l-5.0588455-30.5724583c-0.8316803-5.0252838-5.1259689-8.6728916-10.2126465-8.6728916   c-0.5681,0-1.1394653,0.0474777-1.702652,0.1407957L15.1709671,25.3499756   c-5.6375847,0.9323673-9.4652805,6.2785358-8.5320959,11.9161186l5.0588465,30.5708199   c0.830862,5.0261078,5.1259708,8.6737137,10.2118301,8.6737137c0.5672779,0,1.1402855-0.0474777,1.7042904-0.1407928   l64.2105103-10.6252213c2.7324295-0.4518585,5.1226959-1.9400406,6.7353058-4.191143   C96.1706238,59.3023643,96.8091202,56.5584717,96.3572617,53.8293152z M21.1087685,51.0446968   c-0.1890926-1.141922,0.5836487-2.2208138,1.7255726-2.4099083l21.8512707-3.6165009   c1.1329193-0.1890945,2.2208176,0.5844688,2.4099083,1.7255745c0.1890945,1.141922-0.5836487,2.2208176-1.7255745,2.4099083   l-21.8512669,3.6165009c-0.1154213,0.0196457-0.2308407,0.027832-0.3446255,0.027832   C22.1671963,52.7981033,21.2790337,52.0712013,21.1087685,51.0446968z M56.2571068,59.5808868L25.4890079,64.674118   c-0.1154194,0.0196457-0.2308407,0.0278244-0.3446236,0.0278244c-1.0068569,0-1.8950214-0.7268982-2.0652866-1.7534027   c-0.1890926-1.1411057,0.5836506-2.2199974,1.7255745-2.4099083l30.7681007-5.0932274   c1.1345558-0.1899109,2.2199974,0.5828323,2.4099083,1.7255745C58.1709557,58.3120842,57.3982124,59.390976,56.2571068,59.5808868z    M60.3058205,34.4520111l-38.757473,6.4160576c-0.1154213,0.0188255-0.2308407,0.027832-0.3446236,0.027832   c-1.0068588,0-1.8950214-0.7277222-2.0652866-1.7534065c-0.1890926-1.1419258,0.5836506-2.2208176,1.7255745-2.4099083   l38.7574768-6.4160595c1.1394691-0.1825447,2.2199974,0.5836506,2.4099083,1.7255726   C62.2196693,33.1840248,61.4469261,34.2629166,60.3058205,34.4520111z"/>
    </svg>

  let logo
  if (router.pathname === "/") {
    logo = 
      <div className="flex items-center">
        {appLogo}
        <h1 className="font-header text-4xl md:text-5xl pl-2 md:pl-4">Leet Code</h1>
      </div>
  } else {
    logo =
      <Link href='/'>
        <a>
          <div className="flex items-center pb-2 md:pb-0 transition duration-300 ease-in-out hover:text-red-500 dark:hover:text-green-300">
            {appLogo}
            <h1 className="font-header text-4xl md:text-5xl pl-2 md:pl-4">Leet Code</h1>
          </div>
        </a>
      </Link>
  }


  let modeIcon
  if (darkMode) {
    modeIcon = 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 transition duration-300 ease-in-out hover:text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
  } else {
    modeIcon =
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 transition duration-300 ease-in-out hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
  }

  return (
    <header className="p-0 md:p-2 px-6 md:px-40 bg-gray-50 shadow-md sticky top-0 z-50 dark:bg-gray-700">
      <nav className="flex justify-between items-center">
        <button
          className="md:hidden flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 group-hover:bg-red-500 dark:bg-gray-50 dark:group-hover:bg-green-300"
                : "group-hover:bg-red-500 dark:bg-gray-50 dark:group-hover:bg-green-300"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "group-hover:bg-red-500 dark:bg-gray-50 dark:group-hover:bg-green-300"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 group-hover:bg-red-500 dark:bg-gray-50 dark:group-hover:bg-green-300"
                : "group-hover:bg-red-500 dark:bg-gray-50 dark:group-hover:bg-green-300"
            }`}
          />
        </button>
        {logo}
        <div className="sm:hidden md:block" onClick={() => changeTheme()}>
          {modeIcon}
        </div>
        <Link href='/add'>
          <a className="sm:hidden md:block">
            <h2 className="font-header text-2xl md:text-3xl transition duration-300 ease-in-out hover:text-red-500 dark:hover:text-green-300">Add a flash card</h2>
          </a>
        </Link>
      </nav>
    </header>
  )
}