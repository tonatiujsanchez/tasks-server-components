'use client'
import { useState } from "react"
import { setCookie } from "cookies-next"
import { TABS_COOKIES_KEY } from "@/constants"
import { useRouter } from "next/navigation"


interface Props {
    tabOptions?: number[]
    currentTab?: number
}

export const TabBar = ({ tabOptions = [1,2,3,4,5], currentTab }:Props) => {
    
    const router = useRouter()
    const [selected, setSelected] = useState(currentTab)

    const onTabSelected = (tab:number) => {
        setSelected( tab )
        setCookie(TABS_COOKIES_KEY, tab.toString())
        router.refresh()
    }

    return (
        <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 mt-2 ${'grid-cols-' + tabOptions.length}`}>
            {
                tabOptions.map( tab => (
                    <div key={tab}>
                        <input 
                            type="radio" 
                            id={ tab.toString() } 
                            checked={ tab === selected }
                            onChange={()=>{}}
                            className="peer hidden"
                        />
                        <label 
                            onClick={()=> onTabSelected(tab)}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all duration-500"
                        >
                            { tab }
                        </label>
                    </div>
                ))
            }
        </div>
    )
}
