'use client'

import Link from 'next/link'

export default function Error({
    error,
}: {
    error: Error & { digest?: string }
}) {
    console.error(`${error.name} - "${error.message}"`)

    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <Link href="/">Go Home?</Link>
        </div>
    )
}
