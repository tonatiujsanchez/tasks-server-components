'use client'
import { Task } from "@prisma/client"
import { TaskItem } from "./TaskItem"

// import * as tasksApi from '@/tasks/services/task'
import { useRouter } from "next/navigation"

import { toggleTask } from '../actions'

interface Props {
    tasks: Task[]
}
export const TaskList = ({ tasks = [] }:Props) => {

    const router = useRouter()

    // const toggleTask = async(id: string, complete: boolean) => {
    //     await tasksApi.updateTask( id, complete )
    //     router.refresh()
    // }

    const toggleTaskWithAction = async(id: string, complete: boolean) => {
        await toggleTask( id, complete )
    }

    return (
        <ul className="divide-y divide-gray-100 bg-white px-4 md:px-5 rounded-lg">
            {
                tasks.map( task => (
                    <TaskItem
                        key={ task.id }
                        task={ task }
                        toggleTask={ toggleTaskWithAction }
                    />
                ))
            }
        </ul>
    )
}
