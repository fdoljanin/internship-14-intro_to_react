import Task from './Task.js';

const TaskList = ({tasks}) => {
    let message;
    if (tasks.length===0)
        message = <h3 className="task-message">No items</h3>;

    return (
        <section>
            <div className="section-top">
                <h2>Todos</h2>
            </div>
                <div className="section-content">
                    {tasks.map((task, index)=>(
                        <Task key={index} taskInfo={task} />
                    ))}
                    {message}
                </div>
        </section>
    )
}

export default TaskList;