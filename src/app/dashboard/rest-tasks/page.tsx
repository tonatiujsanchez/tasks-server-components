import { TaskList, TasksHeader } from "@/tasks";
import prisma from "@/lib/prisma";



export const metadata = {
	title: 'Task list with Server Actions',
	description: 'Task list',
};

export default async function RestTasksPage() {

	const tasks = await prisma.task.findMany({ orderBy: { description: 'asc' } })

	return (
		<div>
			<span className="block text-3xl mb-10">Rest API</span>
			<TasksHeader />
			<TaskList tasks={ tasks } />
		</div>
	);
}