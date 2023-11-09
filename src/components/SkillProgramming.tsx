export default function SkillProgramming(params: {
    language: string
    level: 'Basic' | 'Average' | 'Intermediate' | 'Advanced'
    learningStyle: 'Self Taught' | 'Certification' | 'Online Course'
}) {
    return (
        <div className="mb-2 mt-1">
            <h2 className="text-lg underline underline-offset-1">
                {params.language}
            </h2>
            <div className="flex flex-row gap-2">
                <p>{params.level}</p>
                <p className="italic">{params.learningStyle}</p>
            </div>
            <hr className="w-[25%] border-2 mb-1" />
        </div>
    )
}
