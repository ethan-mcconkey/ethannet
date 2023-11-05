import type { Metadata, Viewport } from 'next'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'
import Link from 'next/link'
import { BiHomeAlt2, BiPencil } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

import './globals.css'
import 'highlight.js/styles/github-dark.css'

import { Providers } from '@/components/Providers'
import DarkModeButton from '@/components/DarkModeButton'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Ethan's Website",
}

export const viewport: Viewport = {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="">
            <body
                className={` ${josefinSans.className} dark:bg-slate-800 bg-slate-300 dark:text-white text-black relative min-h-screen pb-16`}
            >
                <Providers>
                    <header>
                        <nav className="sticky w-full dark:bg-slate-700 bg-slate-400 p-2 flex flex-row items-center justify-between shadow dark:shadow-slate-600 shadow-slate-500">
                            <div className="flex flex-row gap-2 justify-center items-center ">
                                <Link className="navitem" href="/">
                                    <BiHomeAlt2 className="navicon" />
                                    <p>Home</p>
                                </Link>
                                <Link className="navitem" href="/blog">
                                    <BiPencil className="navicon" />
                                    <p>Blog</p>
                                </Link>
                            </div>
                            <span>
                                <DarkModeButton />
                            </span>
                        </nav>
                    </header>
                    {children}
                    <footer className="w-full p-2 absolute bottom-0 dark:bg-slate-700 bg-slate-400 flex flex-row justify-between items-center">
                        <p>
                            {'\u00A9'} 2023 Ethan McConkey. All Rights Reserved
                        </p>
                        <div className="flex flex-row gap-4 text-xl p-0 m-0">
                            <Link
                                className="flex flex-row gap-1"
                                href="https://github.com/ethan-mcconkey"
                                title="Go to my GitHub page."
                                target="_blank"
                            >
                                <FaGithub />
                                <p>GitHub</p>
                            </Link>
                            <Link
                                className="flex flex-row gap-1"
                                href="https://www.linkedin.com/in/ethan-mcconkey-635702263/"
                                title="Go to my LinkedIn page."
                                target="_blank"
                            >
                                <FaLinkedin />
                                <p>LinkedIn</p>
                            </Link>
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    )
}
