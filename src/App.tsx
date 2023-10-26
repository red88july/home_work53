import AddTaskForm from "./TaskForm/AddTaskForm";
import Task from "./Task/Task.tsx";
import './App.css';
import React, { useState } from "react";

interface Task {
    text: string;
    id: number;
}

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {text: 'Do home work', id: 1},
        {text: 'Cook dinner', id: 2},
        {text: 'Do house cleaning', id: 3},
        {text: 'Feed the pets', id: 4},
        {text: 'Cutting firewood', id: 5},
    ]);

    const deleteTask = (id:number) => {
        const removeTaskFromList = tasks.filter(task => task.id !== id);
        setTasks(removeTaskFromList);
    }

    const taskList = tasks.map((task => <Task text={task.text} id={task.id} onDelete={deleteTask} />));

    const [currentTask, setCurrentTask] = useState('');

    const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const addTask = () => {
        if (currentTask !== "") {
            const newTask = { text: currentTask, id: tasks.length + 1 };
            setTasks( [...tasks, newTask]);
            setCurrentTask("");
        }
    };

    return (
        <div id="root">
            <AddTaskForm
                onInputChange={inputChange}
                currentTask={currentTask}
                addTask={addTask}/>
            {taskList}
        </div>
    );
}

export default App;