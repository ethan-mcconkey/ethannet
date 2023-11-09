import EducationEntry from '@/components/EducationEntry'
import SkillProgramming from '@/components/SkillProgramming'

export default function Home() {
    return (
        <>
            <main>
                <section className="flex flex-col justify-center items-center mb-4">
                    <div></div>
                    <h1 className="text-4xl">Ethan McConkey</h1>
                    <p className="max-w-[75ch] text-center">
                        Hello my name is Ethan and I am currently in my first
                        year of studying a BScIT degree in Networking and
                        Security. I have a passion and lifelong interest in the
                        field of technology and computers, a desire to learn as
                        much as possible and to apply this to my studies and
                        future career opportunities.
                    </p>
                </section>
                <section>
                    <div>
                        <h1 className="font-bold text-center text-xl">
                            Skills
                        </h1>
                        <div>
                            <SkillProgramming
                                language="Java"
                                level="Advanced"
                                learningStyle="Self Taught"
                            />
                            <SkillProgramming
                                language="Python"
                                level="Average"
                                learningStyle="Self Taught"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-center text-xl">
                            Education
                        </h1>
                        <div>
                            <EducationEntry
                                institute="Eduvos"
                                instituteLink="https://www.eduvos.com/"
                                type="Bachelor of Science in Information Technology:
                                Security and Network Engineering"
                                date="January 2023 - PRESENT"
                            />
                            <EducationEntry
                                institute="CompTIA"
                                instituteLink="https://www.comptia.org/"
                                type="Network+ Certificate"
                                date="December 2022 - PRESENT"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
