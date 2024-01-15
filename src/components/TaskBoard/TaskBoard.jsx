import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import TaskActions from "../TaskActions/TaskActions";
import TaskTable from "../TaskTable/TaskTable";

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

    const [tasks, setTasks] = useState([defaultTask]);
    return (
        <section className="mb-20" id="tasks">

            <div className="container">
                {/* //<!-- Search Box --> */}
                <div className="p-2 flex justify-end">
                    <SearchBox />
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/* Task Actions */}
                    <TaskActions />

                    {/* Task Table */}
                    <TaskTable tasks={tasks}/>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;