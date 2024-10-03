'use client'
import { useSession, signOut, signIn } from "next-auth/react"
import { CiLogin, CiLogout } from "react-icons/ci"

export const SidebarAuthButton = () => {

    const { status } = useSession()

    if (status === 'loading') {
        return (
            <div className="px-4 w-full py-6 flex items-center space-x-4 rounded-md bg-gray-200"></div>
        )
    }

    return (
        status === 'authenticated'
            ? (
                <button
                    onClick={ ()=> signOut() } 
                    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            ) : (
                <button
                    onClick={ ()=> signIn() }
                    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                    <CiLogin />
                    <span className="group-hover:text-gray-700">Login</span>
                </button>
            )
    )
}
