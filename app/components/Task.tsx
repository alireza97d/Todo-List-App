'use client'

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { DeleteTodo, EditTodo } from "@/api";
import Form from "./Form";

interface TaskPropos {
    task: ITask
}

const Task: React.FC<TaskPropos> = ({ task }) => {
    const router = useRouter()
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text)


    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await EditTodo({
            id: task.id,
            text: taskToEdit
        })
        setOpenModalEdit(false)
        router.refresh()
    }

    const handleDeleteTask = async (id: string) => {
        await DeleteTodo(id)
        setOpenModalDelete(false)
        router.refresh()
    }


    return (
        <tr>
            <td className="w-full">{task.text}</td>
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" size={23} className="text-blue-500" />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <Form
                        title="Edit task"
                        btnTitle="Submit"
                        value={taskToEdit}
                        onChange={setTaskToEdit}
                        handleSubmit={handleSubmitEditTodo}
                    />
                </Modal>

                <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor="pointer" size={23} className="text-red-500" />
                <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                    <h3 className="text-lg">
                        Are you sure, you want to delete this task?
                    </h3>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="btn"
                        >
                            Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    );
}

export default Task;