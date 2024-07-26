'use client'
import { FaRegTrashCan } from "react-icons/fa6"
import * as tasksApi from '@/tasks/services/task'
import { useRouter } from "next/navigation"
import { deleteCompleted } from "../actions"

export const DeleteCompleted = () => {
    
    const router = useRouter()

    const deleteTasksCompleted = async() => {
        await tasksApi.deleteTasksComplete()
        router.refresh()
    }
    
    const deleteTasksCompletedWhitAction = async() => {
        await deleteCompleted()
    }
    

    return (
        <button 
            className="flex justify-center items-center gap-x-1 px-3 h-10 text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase text-sm font-semibold active:scale-95"
            onClick={ deleteTasksCompletedWhitAction }
        >
            <FaRegTrashCan /> Eliminar completados
        </button>
    )
}
