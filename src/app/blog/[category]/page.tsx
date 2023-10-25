import { Metadata } from "next";
import { toSentenceCase } from "@/lib/string";
import { categories } from "@/lib/posts";

export function generateMetadata({
    params,
}: {
    params: { category: string };
}): Metadata {
    return {
        title: toSentenceCase(params.category),
    };
}

export function generateStaticParams() {
    return categories.map((category: string) => {
        return { category: category };
    });
}

export default function Category(): JSX.Element {
    return (
        <>
            <header></header>
            <main></main>
        </>
    );
}
