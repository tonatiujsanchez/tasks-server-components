import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { CiServer } from "react-icons/ci";
import { MdOutlineCookie } from "react-icons/md";
import { SidebarItem } from "@/components"

import { SidebarItem as ISidebarItem } from "@/interfaces"


const sidebarItems:ISidebarItem[] = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <MdOutlineSpaceDashboard size={30} />
    },
    {
        name: 'Rest tasks',
        path: '/dashboard/rest-tasks',
        icon: <GoTasklist size={30} />
    },
    {
        name: 'Server tasks',
        path: '/dashboard/server-tasks',
        icon: <CiServer size={30} />
    },
    {
        name: 'Cookies',
        path: '/dashboard/cookies',
        icon: <MdOutlineCookie size={30} />
    },
]

export function Sidebar() {
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home">
                        {/* Next/Image */}
                        <Image
                            src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                            width={32}
                            height={32}
                            alt="Dashboard logo"
                            className="w-32"
                        />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    {/* Next/Image */}
                    <Image
                        src="https://avatars.githubusercontent.com/u/39894274?v=4"
                        alt="user photo"
                        width={112}
                        height={112}
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                    />

                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Ton Sanz Jimz</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        sidebarItems.map( sidebarItem => (
                            <SidebarItem
                                key={ sidebarItem.path }
                                { ...sidebarItem }
                            />
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    );
}