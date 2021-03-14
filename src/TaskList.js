import Task from './Task.js';

const TaskList = ({tasks}) => {
    return (
        <section>
            <div className="section-top">
                <h2>Todos</h2>
            </div>
                <div className="section-content">
                    {tasks.map((task, index)=>(
                        <Task key={index} taskInfo={task} />
                    ))}
                </div>
        </section>
    )
}

export default TaskList;