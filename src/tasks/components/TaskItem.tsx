'use client'
import { Task } from "@prisma/client"
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
    task: Task
    toggleTask: ( id:string, complete:boolean )=> Promise<Task | void>
}
export const TaskItem = ({ task, toggleTask }:Props) => {

    const { id, description, complete } = task
    
    return (
        <li className="flex justify-between gap-x-6 py-5 px-2 md:px-3 border-l-4 !border-l-transparent hover:!border-l-indigo-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-transparent">
            <div className="flex items-center gap-x-4 text-slate-800">
                <button 
                    type="button"
                    onClick={ ()=> toggleTask( id, !complete ) }
                    className="active:scale-95"
                >
                    {
                        complete
                        ?( <IoCheckbox size={24} /> )
                        :( <MdOutlineCheckBoxOutlineBlank size={24} /> )
                    }
                </button>
                 <span className={`${ complete && "text-slate-500 line-through" }`}>{ description }</span>
            </div>
            <div className="shrink-0 flex sm:flex-col sm:items-end">
                actions
            </div>
        </li>
    )
}
