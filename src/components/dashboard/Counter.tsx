'use client'

import { useState } from "react"


export const Counter = () => {
    const [counter, setCounter] = useState(10)
    return (
        <button 
            className="border rounded-lg w-28 h-10 font-medium flex justify-center items-center active:scale-95"
            onClick={()=> setCounter( counter + 1 )}
        >
            { counter }
        </button>
    )
}
