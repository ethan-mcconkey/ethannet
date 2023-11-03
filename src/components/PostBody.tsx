import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

export default function PostBody(params: { content: string }): JSX.Element {
    return (
        <>
            <div className="max-w-[60%] flex flex-col gap-2">
                <Markdown rehypePlugins={[rehypeHighlight]}>
                    {params.content}
                </Markdown>
            </div>
        </>
    )
}
