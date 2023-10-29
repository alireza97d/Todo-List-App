import { ITask } from "@/types/tasks";
import Task from "./Task";

interface TodolistProps {
    tasks: ITask[];
}

const TodoList: React.FC<TodolistProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead className="bg-gray-100">
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => <Task key={task.id} task={task} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;