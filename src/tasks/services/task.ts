import { Task } from "@prisma/client";


export  const updateTask = async(id:string, complete:boolean):Promise<Task> => {

    const body = {
        complete
    }

    const task = await fetch(`/api/tasks/${ id }`,{
        method: 'PUT',
        body:  JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then( res => res.json() )

    console.log(task)
    return task
}