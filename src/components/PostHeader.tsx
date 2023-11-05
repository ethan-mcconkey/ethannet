import { formatDate } from '@/lib/date'

export default function PostHeader(params: {
    title: string
    date: Date
}): JSX.Element {
    return (
        <div>
            <h1>{params.title}</h1>
            <p>{formatDate(params.date)}</p>
            <hr />
        </div>
    )
}
