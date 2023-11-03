import { formatDate } from '@/lib/date'
import Link from 'next/link'

export default function PostTile(props: {
    id: string
    category: string
    title: string
    publishedDate: Date
}) {
    return (
        <Link className="tile" href={'blog/' + props.category + '/' + props.id}>
            <h1>{props.title}</h1>
            <p>{formatDate(props.publishedDate)}</p>
        </Link>
    )
}
