import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

interface Segments {
    params: { id: string }
}

export async function GET(_request: Request, { params }:Segments) {

    const { id } = params

    const task = await prisma.task.findFirst({
        where: { id }
    })

    if( !task ) {
        return NextResponse.json({ msg: 'Task not found' }, { status: 404 })
    }

    return NextResponse.json(task)
}


const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})
export async function PUT(request: Request, { params }:Segments) {

    try {
        
        const { id } = params
    
        const task = await prisma.task.findFirst({
            where: { id }
        })
    
        if( !task ) {
            return NextResponse.json({ msg: 'Task not found' }, { status: 404 })
        }

        const { complete, description } = await putSchema.validate( await request.json() )

        const taskUpdated = await prisma.task.update({
            where: { id },
            data: {
                complete,
                description
            }
        })
        
        return NextResponse.json(taskUpdated)
    
    } catch (error) {
     
        return NextResponse.json(error, { status: 400 })        
    }
}
