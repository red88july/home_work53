import React from "react";
interface TaskProps {
    text: string;
    id: number;
}

const Task: React.FC<TaskProps> = ({text}) => {
    return (
        <div className="task">
            <span className="task-name">{text}</span>
            <button type="button" className="btn-remove">Remove</button>
        </div>
    )
}
export default Task;