import { cookies } from 'next/headers'
import { TabBar } from "@/components";
import { TABS_COOKIES_KEY } from '@/constants';

export const metadata = {
    title: 'Cookies Page',
    description: 'Cookies Page',
};

export default function CookiesPage() {
    
    const cookieStore = cookies()
    const cookieTab = cookieStore.get(TABS_COOKIES_KEY)?.value ?? '1'

    const allCookies = cookieStore.getAll()
    console.log(allCookies)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
                <span className="text-3xl">Tabs</span>
                <TabBar currentTab={ +cookieTab } />
            </div>
            <div>
                <span className="text-3xl">All Cookies</span>
                <pre>
                    { JSON.stringify(allCookies, null, 4) }
                </pre>
            </div>

        </div>
    );
}