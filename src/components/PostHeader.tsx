import { formatDate } from '@/lib/date'

export default function PostHeader(params: {
    title: string
    date: Date
}): JSX.Element {
    return (
        <div>
            <div className="p-4 m-0">
                <h1 className="text-lg font-black mb-2">{params.title}</h1>
                <p className="text-sm italic">{formatDate(params.date)}</p>
            </div>
            <hr />
        </div>
    )
}
