"use client"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import {Moon, Sun} from "lucide-react"
import { useEffect, useState } from "react"

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <>
      <header className="h-20 bg-slate-900">
        <nav className="flex items-center max-w-screen-2xl mx-auto justify-between h-full">
          <h1 className="text-white text-2xl font-bold">Where in the world?</h1>
          {isClient && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="flex items-center gap-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
            </Button>
          )}

        </nav>
      </header>
    </>
  )
}