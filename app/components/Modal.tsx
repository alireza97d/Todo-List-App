interface ModlProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => boolean | void,
    children: React.ReactNode
}


const Modal: React.FC<ModlProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <dialog id="todo_modal" className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
                <form method="dialog">
                    <button
                        onClick={() => setModalOpen(false)}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                {children}
            </div>
        </dialog>
    );
}

export default Modal;