import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type themeContextType = {
  darkMode: boolean;
  changeTheme: () => void;
}

const themeContextDefaultValues: themeContextType = {
  darkMode: false,
  changeTheme: () => {},
}

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

type Props = {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [darkMode, setMode] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.theme || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setMode(true)
    }
  }, [])

  const changeTheme = () => {
    localStorage.setItem('theme', JSON.stringify(!darkMode))
    darkMode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
    darkMode ? setMode(false) : setMode(true)
  }

  const value = {
    darkMode,
    changeTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
} 