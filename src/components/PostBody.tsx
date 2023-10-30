import Markdown from 'markdown-to-jsx'
import { markdownToHtml } from '@/lib/posts'

export default async function PostBody(params: {
    content: string
}): Promise<JSX.Element> {
    const content = await markdownToHtml(params.content)

    return (
        <article className="prose md:prose-lg">
            <Markdown>{content}</Markdown>
        </article>
    )
}
