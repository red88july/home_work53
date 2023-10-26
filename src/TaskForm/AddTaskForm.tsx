import React from "react";

interface TaskProps {
    onInputChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    currentTask: string;
    addTask: () => void;
}

const AddTaskForm:React.FC<TaskProps> = ({onInputChange, currentTask, addTask}) => {
    const formElement= (event: React.FormEvent) => {
        event.preventDefault();
        addTask();
    }

    return (
        <form className="taskform-box" onSubmit={formElement}>
            <label className="label-input-todo" htmlFor="input-form">TODO</label>
            <div className="taskform-item">
                <input id="input-form" type="text" placeholder="What would you like to do today?" value={currentTask} onChange={onInputChange} />
                <button type="submit" onClick={addTask}>Add</button>
            </div>
        </form>
    )
}
export default AddTaskForm;