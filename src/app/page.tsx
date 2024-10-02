import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href="/dashboard" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                Dashboard
                <GoArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
        </main>
    );
}
