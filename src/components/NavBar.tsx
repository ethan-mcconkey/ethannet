import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { BiHomeAlt2, BiPencil } from "react-icons/bi";

export default function Navbar() {
    return (
        <nav
            className="h-[50px] flex flex-row float-right shadow-lg shadow-blue-300 rounded-bl-md rounded-br-md gap-2 p-0 m-0 |
         justify-center items-center bg-blue-200"
        >
            <Link className="navitem group" href="/">
                <p className="tooltip group-hover:scale-100">Home</p>
                <BiHomeAlt2 className="navicon group-hover:text-[49px]" />
            </Link>
            <Link className="navitem group" href="/blog">
                <p className="tooltip group-hover:scale-100">Blog</p>
                <BiPencil className="navicon group-hover:text-[49px]" />
            </Link>
            <div className="h-[48px] navitem group">
                <p className="tooltip group-hover:scale-100">Theme</p>
                <DarkModeButton />
            </div>
        </nav>
    );
}
