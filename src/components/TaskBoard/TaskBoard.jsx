/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import TaskActions from "../TaskActions/TaskActions";
import TaskTable from "../TaskTable/TaskTable";
import Modal from "../Modal/Modal";

const TaskBoard = () => {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': "Learn React Native",
        'description':
            "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
        'tags': ["web", "react", "js"],
        'priority': "High",
        'isFavourite': true,
    };

    function handleAddTasks(newTask, isAdd) {
        if (isAdd) {
            setTasks([...tasks, newTask]);
        } else {
            setTasks(
                tasks.map(task => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            )
        }

        if (newTask.title.length > 0) handleModalClose();
    }

    const [tasks, setTasks] = useState([defaultTask]);
    const [modalShown, setModalShown] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    function handleTaskEdit(task) {
        setTaskToUpdate(task);
        setModalShown(true);
    }

    function handleModalClose() {
        setModalShown(false);
        setTaskToUpdate(null);
    }

    return (
        <section className="mb-20" id="tasks">
            {modalShown && <Modal closeModal={handleModalClose} onSave={handleAddTasks} taskToUpdate={taskToUpdate} />}
            <div className="container">
                {/* //<!-- Search Box --> */}
                <div className="p-2 flex justify-end">
                    <SearchBox />
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/* Task Actions */}
                    <TaskActions onAddTasks={() => setModalShown(true)} />

                    {/* Task Table */}
                    <TaskTable tasks={tasks} onEdit={handleTaskEdit} />
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;