import { ReactNode, createContext, useState } from "react";

type ThemeContextProps = {
    children: ReactNode
}

type ThemeContextType = {
    theme: boolean,
    setTheme: (newState: boolean) => void
}

const initialValue = {
    theme: false,
    setTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(initialValue)

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState(initialValue.theme)
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}
