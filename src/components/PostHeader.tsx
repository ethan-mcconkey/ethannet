import { formatDate } from '@/lib/date'

export default function PostHeader(props: {
    title: string
    publishedDate: Date
    editedDate: Date
}): JSX.Element {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>
                Published on: {formatDate(props.publishedDate)} | Edited on:{' '}
                {formatDate(props.editedDate)}
            </p>
            <hr />
        </div>
    )
}
