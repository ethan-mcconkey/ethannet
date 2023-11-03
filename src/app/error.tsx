'use client'

import Link from 'next/link'

export default function Error({
    error,
}: {
    error: Error & { digest?: string }
}) {
    console.error(`${error.name} - "${error.message}"`)

    return (
        <div className="w-[100%] flex flex-col items-center justify-center">
            <h2 className="mb-4 p-4 text-7xl">Something went wrong!</h2>
            <p className="m-2 p-2 text-3xl">{error.message}</p>
            <Link
                href="/"
                className="-2 p-2 text-xl font-bold underline underline-offset-2"
            >
                Go Home?
            </Link>
        </div>
    )
}
