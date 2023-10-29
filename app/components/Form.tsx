import { FormEventHandler } from "react";

interface FormProps {
    title: string;
    btnTitle: string;
    value: string;
    onChange: (targetValue: string) => void;
    handleSubmit: FormEventHandler<HTMLFormElement>;
}


const Form: React.FC<FormProps> = ({ title, btnTitle, value, onChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h3 className='font-bold text-lg'>
                {title}
            </h3>
            <div className="modal-action">
                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                />
                <button type="submit" className='btn'>
                    {btnTitle}
                </button>
            </div>
        </form>
    );
}

export default Form;