import { useState } from 'react';

const Task = ({ taskInfo }) => {
    const [taskTitleClasses, setTasksTitleClasses] = useState();

    const checkedHandler = ({ target: { checked } }) => {
        if (checked)
            setTasksTitleClasses('task-title--crossed');
        else {
            setTasksTitleClasses();
        }
    }

    return (
        <article className="task">
            <div className="task-info">
                <h3 className={taskTitleClasses}>{taskInfo.title}</h3>
                <span className="task-priority">{taskInfo.priority}</span>
            </div>
            <input className="task-checkbox" type="checkbox" onChange={checkedHandler}></input>
        </article>
    )
}

export default Task;