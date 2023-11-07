import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main>
                <section>
                    <div>Portrait</div>
                    <h1>Ethan McConkey</h1>
                    <p>Short Description</p>
                </section>
                <section>
                    <div>
                        <h1>Skills</h1>
                    </div>
                    <div>
                        <h1>Education</h1>
                    </div>
                </section>
                <section>
                    <h1>Contact Me</h1>
                    <p>
                        Email:{' '}
                        <Link href="mailto:ethanmcconkey@protonmail.com">
                            ethanmcconkey@protonmail.com
                        </Link>
                    </p>
                </section>
            </main>
        </>
    )
}
