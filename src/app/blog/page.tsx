import { formatDate } from '@/lib/date'
import { categories, getPostIds, getPostMetadata } from '@/lib/posts'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'My Blog',
}

export default function Blog() {
    return (
        <>
            <main>
                {categories.map((category) => {
                    return (
                        <section key={category}>
                            <h1 className="font-bold text-2xl mb-4 mt-2">
                                {category.toUpperCase().replace('-', ' ')}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-x-[1%] gap-y-4">
                                {getPostIds(category).map((id) => {
                                    const postMetadata = getPostMetadata(
                                        id,
                                        category
                                    )

                                    return (
                                        <div
                                            key={id}
                                            className="border dark:border-white border-black rounded-lg p-2 min-w-[24%] flex flex-col"
                                        >
                                            <h2 className="text-lg underline">
                                                {postMetadata.title}
                                            </h2>
                                            <p className="italic font-light text-sm">
                                                {formatDate(postMetadata.date)}
                                            </p>
                                            <Link
                                                href={`blog/${category}/${id}`}
                                                className="text-center text-md hover:underline hover:font-medium hover:underline-offset-2"
                                                title="Go to the related post?"
                                            >
                                                Go to Post?
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </main>
        </>
    )
}
