'use client'
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import { WidgetItem } from "@/components/dashboard/WidgetItem";


export default function AuthClientPage() {

    const { data: session, status } = useSession()

    const userName = session?.user?.name ?? 'No authenticated'
    const userEmail = session?.user?.name ?? 'No authenticated'
    const userAvatarUrl = session?.user?.image

    if( status === 'loading' ){
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <WidgetItem title="Usuario conectado - CSR">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
                <div className="text-center">
                    {userAvatarUrl ? (
                        <Image
                            src={userAvatarUrl}
                            alt={userName}
                            width={112}
                            height={112}
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        />
                    ) : (
                        <div className="h-28 w-28 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
                            <FaUser className="h-14 w-14 text-indigo-600" />
                        </div>
                    )}
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{userName}</h2>
                    <p className="text-gray-600 mb-6">{userEmail}</p>
                </div>
            </div>
        </WidgetItem>
    );
}