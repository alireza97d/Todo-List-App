'use client'

import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';

const AddTask = () => {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo({
            id: uuidv4(),
            text: newTaskValue
        })
        setNewTaskValue("")
        setModalOpen(false)
        router.refresh()
    }

    return (
        <>
            <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary w-full">
                Add Neew Task
                <AiOutlinePlus size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <Form
                    title="Add new task"
                    btnTitle="Submit"
                    value={newTaskValue}
                    onChange={setNewTaskValue}
                    handleSubmit={handleSubmitNewTodo}
                />
            </Modal>
        </>
    );
}

export default AddTask;