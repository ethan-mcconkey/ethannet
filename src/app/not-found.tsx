import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <main>
            <div className="w-[100%] flex flex-col items-center justify-center">
                <h1 className="mb-4 p-4 text-9xl">404: Page Not Found</h1>
                <p className="m-2 p-2 text-4xl">
                    The page you tried to access either does not exist, has been
                    moved, or has been deleted.
                </p>
                <Link
                    className="m-2 p-2 text-[30px] font-bold underline underline-offset-2"
                    href="/"
                >
                    Go Back Home?
                </Link>
            </div>
        </main>
    );
}
