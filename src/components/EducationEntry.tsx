import Link from 'next/link'

export default function EducationEntry(params: {
    institute: string
    instituteLink: string
    type: string
    date: string
}) {
    return (
        <div className="mb-2 mt-1">
            <Link
                href={params.instituteLink}
                target="_blank"
                title={params.institute + ' Website'}
                className="text-lg underline underline-offset-2"
            >
                {params.institute}
            </Link>
            <p>{params.type}</p>
            <p className="italic text-sm">{params.date}</p>
            <hr className="w-[50%] border-2 mb-1" />
        </div>
    )
}
