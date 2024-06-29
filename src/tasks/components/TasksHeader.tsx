import { DeleteCompleted, TaskForm } from "@/tasks"


export const TasksHeader = () => {
    return (
        <header className="flex justify-between items-center mb-5">
            <TaskForm />
            <DeleteCompleted />
        </header>
    )
}
