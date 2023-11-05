'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme !== undefined) {
        setTheme(currentTheme)
    } else {
        setTheme('dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => {
                return theme === 'dark' ? setTheme('light') : setTheme('dark')
            }}
            className="w-16 h-8 rounded-full p-1 pr-2 bg-slate-400 dark:bg-slate-700 relative transition-colors duration-200 ease-in outline-none ring-2 ring-black dark:ring-white border-transparent"
        >
            <div
                id="toggle"
                className="rounded-full w-[1.125rem] h-[1.125rem] relative ml-0 dark:ml-9 pointer-events-none transition-duration-100 ease-out text-lg"
            >
                {theme === 'dark' ? (
                    <BiMoon className="text-white" />
                ) : (
                    <BiSun className="text-yellow-400" />
                )}
            </div>
        </button>
    )
}

export default DarkModeButton
