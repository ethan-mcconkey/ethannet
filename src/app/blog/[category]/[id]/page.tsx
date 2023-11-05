import { Metadata } from 'next'
import { toSentenceCase } from '@/lib/string'
import PostHeader from '@/components/PostHeader'
import PostBody from '@/components/PostBody'
import Navbar from '@/components/NavBar'
import CopyrightFooter from '@/components/CopyrightFooter'
import { getPost, getPostMetadata, staticRoutes } from '@/lib/posts'
import { notFound } from 'next/navigation'

export function generateMetadata({
    params,
}: {
    params: { id: string; category: string }
}): Metadata {
    const postMetadata: Post = getPostMetadata(params.id, params.category)

    return {
        title: toSentenceCase(postMetadata.title),
    }
}

export function generateStaticParams() {
    return staticRoutes
}

export default function Category({
    params,
}: {
    params: { id: string; category: string }
}): JSX.Element {
    const post = getPost(params.id, params.category)

    if (!post.content) {
        return notFound()
    }

    return (
        <>
            <header>
                <Navbar />
                <PostHeader {...post} />
            </header>
            <main className="flex items-center justify-center">
                <PostBody content={post.content} />
            </main>
            <CopyrightFooter />
        </>
    )
}
