'use server'
import prisma from '@/lib/prisma';
import { Task } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const toggleTask = async( id:string, complete:boolean ):Promise<Task> => {
    const task = await prisma.task.findFirst({ where: { id } })

    if( !task ){
        throw 'Task not found'
    }

    const updateTask = await prisma.task.update({
        where: { id },
        data: { complete }
    })
    
    revalidatePath('/dashboard/server-tasks')
    return updateTask
}


export const addTask = async(description: string):Promise<Task | { message: string }> => {
    
    try {
        const task = await prisma.task.create({ data: { description } })
        revalidatePath('/dashboard/server-tasks')
        return task
    } catch (error) {
        return {
            message: "Task don't created"
        }
    }
}