import Link from "next/link";

export default function NavItem(params: {
    pageTitle: string;
    pageLink: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={params.pageLink}
            className={params.isActive ? "navitem-active" : "navitem"}
        >
            {params.pageTitle}
        </Link>
    );
}
