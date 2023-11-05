import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

export default function PostBody(params: { content: string }): JSX.Element {
    return (
        <>
            <div className="max-w-[75ch] flex flex-col prose-with-reset dark:prose-invert">
                <Markdown rehypePlugins={[rehypeHighlight]}>
                    {params.content}
                </Markdown>
            </div>
        </>
    )
}
