import { TaskList, TasksHeader } from "@/tasks";
import prisma from "@/lib/prisma";



export const metadata = {
	title: 'Task list with Rest tasks',
	description: 'Task list',
};

export default async function RestTasksPage() {


	const tasks = await prisma.task.findMany({ orderBy: { description: 'asc' } })

	return (
		<div>
			<TasksHeader />
			<TaskList tasks={ tasks } />
		</div>
	);
}