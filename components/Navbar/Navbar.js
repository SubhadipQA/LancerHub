"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'


export default function Navbar(){

    const pathname = usePathname()
    if(pathname.startsWith("/dashboard")){
        return null
    }
    
    return(
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
            <li>
                <Link href="/" className="hover:underline">
                Home
                </Link>  
            </li>
            <li>
                <Link href="/about" className="hover:underline">
                About
                </Link>
            </li>
            <li>
                <Link href="/contact" className="hover:underline">
                Contact
                </Link>
            </li>
            <li>
                <Link href="/projects" className="hover:underline">
                Projects
                </Link>
            </li>
            </ul>
        </nav>
    )
}
