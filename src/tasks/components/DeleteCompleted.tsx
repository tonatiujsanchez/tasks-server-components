'use client'
import { FaRegTrashCan } from "react-icons/fa6"
import * as tasksApi from '@/tasks/services/task'
import { useRouter } from "next/navigation"

export const DeleteCompleted = () => {
    
    const router = useRouter()

    const deleteTasksCompleted = async() => {
        await tasksApi.deleteTasksComplete()
        router.refresh()
    }

    return (
        <button 
            className="flex justify-center items-center gap-x-1 px-3 h-10 text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase text-sm font-semibold active:scale-95"
            onClick={ deleteTasksCompleted }
        >
            <FaRegTrashCan /> Eliminar completados
        </button>
    )
}
