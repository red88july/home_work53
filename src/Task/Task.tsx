import React from "react";
interface TaskProps {
    text: string;
    id: number;
    onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({text, id,  onDelete}) => {

    const deleteTask = () => {
        onDelete(id);
    }

    return (
        <div className="task">
            <span className="task-name">{text}</span>
            <button type="button" className="btn-remove" onClick={deleteTask}>Remove</button>
        </div>
    )
}
export default Task;