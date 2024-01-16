import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Modal = ({ closeModal, onSave }) => {
    const [task, setTask] = useState({
        'id': crypto.randomUUID(),
        'title': "",
        'description': "",
        'tags': [],
        'priority': "",
        'isFavourite': false
    });

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name === 'tags') value = value.split(",");

        setTask({
            ...task,
            [name]: value
        })
    }

    const handleClear = () => {
        setTask({
            ...task,
            'title': "",
            'description': "",
            'tags': [],
            'priority': "",
            'isFavourite': false

        })
    }
return (
    <>
        <div className="bg-black opacity-80 h-screen w-full z-10 absolute top-0 left-0"></div>
        <div className="absolute top-10 left-1/4 z-10 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
            <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">Add New Task <span className="font-bold absolute top-10 right-10 cursor-pointer" onClick={()=>closeModal(false)}><RxCross2 color="red" /></span></h2>

            {/* <!-- inputs --> */}
            <div className="space-y-9 text-white lg:space-y-10">
                {/* <!-- title --> */}
                <div className="space-y-2 lg:space-y-3">
                    <label htmlFor="title">Title</label>
                    <input
                        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                        type="text"
                        name="title"
                        id="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <!-- description --> */}
                <div className="space-y-2 lg:space-y-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                        type="text"
                        name="description"
                        id="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                {/* <!-- input group --> */}
                <div
                    className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                >
                    {/* <!-- tags --> */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="tags">Tags</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="tags"
                            id="tags"
                            value={task.tags}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <!-- priority --> */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="priority">Priority</label>
                        <select
                            className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                            name="priority"
                            id="priority"
                            value={task.priority}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* <!-- inputs ends --> */}
            <div className="mt-16 flex justify-center lg:mt-20 gap-4">
                <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                    onClick={() => onSave(task)}
                >Add Task</button>
                <button
                    type="submit"
                    className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                    onClick={handleClear}
                >Reset Form</button>
            </div>
        </div>
    </>
);
};

export default Modal;