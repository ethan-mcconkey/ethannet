import { Metadata } from 'next'
import { categories } from '@/lib/posts'
import { getPostIdsByCategory, getPost } from '@/lib/posts'
import { toSentenceCase } from '@/lib/string'
import PostHeader from '@/components/PostHeader'
import PostBody from '@/components/PostBody'
import Navbar from '@/components/NavBar'
import CopyrightFooter from '@/components/CopyrightFooter'

export function generateMetadata({
    params,
}: {
    params: { id: string }
}): Metadata {
    return {
        title: toSentenceCase(params.id.replace('-', ' ')),
    }
}

export function generateStaticParams() {
    type params = { category: string; id: string }
    let staticParams: params[] = []
    categories.forEach((category: string) => {
        const postIds = getPostIdsByCategory(category)

        staticParams = staticParams.concat(
            postIds.map((id: string): params => {
                return { category: category, id: id }
            })
        )
    })
    return staticParams
}

export default function Category({
    params,
}: {
    params: { id: string; category: string }
}): JSX.Element {
    const post = getPost(params.id, params.category)

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
