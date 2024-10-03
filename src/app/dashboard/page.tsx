import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth";
import { WidgetItem } from "@/components";
import { FaUser } from "react-icons/fa6";


interface User {
    name: string
    email: string
    image?: string
}

export default async function DashboardPage() {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    const { name, email, image } = session.user as User

    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                <WidgetItem title="Usuario conectado - SSR">
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                {image ? (
                                    <img className="h-12 w-12 rounded-full" src={image} alt={`Avatar de ${name}`} />
                                ) : (
                                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <FaUser className="h-6 w-6 text-indigo-600" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate">{name}</p>
                                <p className="text-sm text-gray-500 truncate">{email}</p>
                            </div>
                        </div>
                    </div>
                </WidgetItem>
            </div>
        </div>
    );
}