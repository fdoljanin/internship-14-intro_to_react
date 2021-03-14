import Task from './Task.js';

const TaskList = ({ tasks }) => {
    return (
        <section>
            <div className="section-top">
                <h2>Todos</h2>
            </div>
            <div className="section-content">
                <h3 className={!tasks.length ? "task-message" : "element--hidden"}>No items</h3>
                {tasks.map((task) => (
                    <Task key={task.id} taskInfo={task} />
                ))}
            </div>
        </section>
    )
}

export default TaskList;