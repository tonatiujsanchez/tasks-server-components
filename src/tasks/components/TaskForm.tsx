'use client'
import * as tasksApi from '@/tasks/services/task'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'


interface FromTarget extends HTMLFormElement {
    description: {
        value:string
    }
}

export const TaskForm = () => {

    const router = useRouter()

    const handleSubmitTask = async(ev: FormEvent) => {
        ev.preventDefault()

        const form = ev.target as FromTarget

        const { description } =  form

        if( description.value.trim() === '' ){
            return console.log('Description is required')
        }

        await  tasksApi.createTask( description.value )
        form.reset()
        router.refresh()
        
    }

    return (
        <form 
            className="flex gap-x-2 mb-5 md:w-1/2"
            onSubmit={ handleSubmitTask }
        >
            <input 
                type="text" 
                name="description"
                required 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Diseñar la Base de Datos"
            />
            <button
                type="submit"
                className="w-36 flex justify-center items-center text-white bg-gradient-to-r from-sky-600 to-cyan-400 rounded-lg uppercase text-sm font-semibold active:scale-95"
            >
                Agregar
            </button>
        </form>
    )
}
