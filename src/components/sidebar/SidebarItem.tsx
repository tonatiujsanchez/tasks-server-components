'use client'
import { SidebarItem as ISidebarItem } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function SidebarItem({ name, path, icon }:ISidebarItem) {
    
    const pathname = usePathname()

    return (
        <li>
            <Link href={ path } className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${ path === pathname ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'hover:bg-slate-100' }`}>
                { icon }
                <span className="-mr-1 font-medium">{ name }</span>
            </Link>
        </li>
    );
}