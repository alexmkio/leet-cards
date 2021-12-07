import { createContext, useContext, ReactNode, useState } from "react";

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

  const changeTheme = () => {
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