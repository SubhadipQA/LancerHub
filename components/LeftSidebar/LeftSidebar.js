import Link from "next/link"
export default function LeftSidebar(){
    return(
        <nav className="bg-gray-200 h-screen p-4">
            <ul className="flex flex-col space-y-4">
            <li>
                <Link href="/dashboard/profile" className="hover:underline">
                Profile
                </Link>  
            </li>
            <li>
                <Link href="/dashboard/workspace" className="hover:underline">
                Workspace
                </Link>
            </li>
            <li>
                <Link href="/dashboard/projects" className="hover:underline">
                Projects
                </Link>
            </li>
            <li>
                <Link href="/dashboard/settings" className="hover:underline">
                Settings
                </Link>
            </li>
            </ul>
        </nav>
    )
}
