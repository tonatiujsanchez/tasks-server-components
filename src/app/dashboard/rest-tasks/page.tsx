import { TaskList } from "@/tasks";
import prisma from "@/lib/prisma";



export const metadata = {
	title: 'Task list with Rest tasks',
	description: 'Task list',
};

export default async function RestTasksPage() {


	const tasks = await prisma.task.findMany({ orderBy: { description: 'asc' } })

	return (
		<div>
			<h1>RestTasks Page</h1>
			<TaskList tasks={ tasks } />
		</div>
	);
}