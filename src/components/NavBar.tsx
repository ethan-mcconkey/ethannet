import Link from 'next/link'
import DarkModeButton from './DarkModeButton'
import { BiHomeAlt2, BiPencil } from 'react-icons/bi'

export default function Navbar() {
    return (
        <nav>
            <Link className="navitem group" href="/">
                <BiHomeAlt2 className="navicon group-hover:text-[49px]" />
            </Link>
            <Link className="navitem group" href="/blog">
                <BiPencil className="navicon group-hover:text-[49px]" />
            </Link>
            <div className="h-[48px] navitem group">
                <DarkModeButton />
            </div>
        </nav>
    )
}
