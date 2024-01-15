import SearchBox from "../SearchBox/SearchBox";
import TaskActions from "../TaskActions/TaskActions";
import TaskTable from "../TaskTable/TaskTable";

const TaskBoard = () => {
    return (
        <section className="mb-20" id="tasks">

            <div className="container">
                {/* //<!-- Search Box --> */}
                <SearchBox/>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/* Task Actions */}
                    <TaskActions/>

                    {/* Task Table */}
                    <TaskTable/>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;