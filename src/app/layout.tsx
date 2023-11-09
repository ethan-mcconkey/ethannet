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
                className={` ${josefinSans.className} dark:bg-dark-800 bg-light-300 dark:text-dark-50 text-light-900 relative min-h-screen pb-16`}
            >
                <Providers>
                    <header>
                        <nav className="sticky w-full dark:bg-dark-700 bg-light-400 p-2 flex flex-row items-center justify-between shadow dark:shadow-dark-600 shadow-light-500">
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
                    <footer className="w-full p-2 absolute bottom-0 dark:bg-dark-700 bg-light-400 flex flex-row justify-between items-center">
                        <p>
                            <Link
                                href="mailto:ethanmcconkey@protonmail.com"
                                title="Contact Me via Email"
                            >
                                Ethan McConkey
                            </Link>{' '}
                            {'\u00A9'} 2023.{' '}
                            <Link
                                href="https://github.com/ethan-mcconkey/personal-website/blob/2895e0dbea002ad6f54f2e0feee5a823882eb47e/LICENSE"
                                title="License"
                                target="_blank"
                            >
                                All Rights Reserved
                            </Link>
                        </p>
                        <div className="flex flex-row gap-4 text-xl">
                            <Link
                                className="socials"
                                href="https://github.com/ethan-mcconkey"
                                title="Go to my GitHub page."
                                target="_blank"
                            >
                                <FaGithub />
                                <p>GitHub</p>
                            </Link>
                            <Link
                                className="socials"
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
