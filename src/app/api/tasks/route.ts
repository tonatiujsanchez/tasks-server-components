import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import * as yup from 'yup'

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)

    let page     = Number(searchParams.get('page')) ?? 1
    let pageSize = Number(searchParams.get('pageSize')) ?? 10

    if( isNaN(page) ) {
        return NextResponse.json({ msg:'Page must be a `number` type'}, { status: 400 })
    }

    if( isNaN(pageSize) ){
        return NextResponse.json({ msg:'pageSize murt be a `number` type'}, { status: 400 })
    }

    if (page <= 0) page = 1
    if (pageSize <= 0) pageSize = 10

    const skip = (page - 1) * pageSize
    const take = pageSize

    const tasks = await prisma.task.findMany({
        skip,
        take,
    })

    return NextResponse.json({
        currentPage: page,
        pageSize,
        data: tasks
    })
}


const postSchema = yup.object({
    description: yup.string().required(),
    complete   : yup.boolean().optional().default(false)
})

export async function POST(request: Request) {
    
    try {

        const body = await postSchema.validate( await request.json() )
        
        const { description, complete } = body

        const task = await prisma.task.create({
            data: {
                description, complete
            }
        })

        return NextResponse.json(task)

    } catch (error) {
        
        return NextResponse.json(error, { status: 400 })
    }
}