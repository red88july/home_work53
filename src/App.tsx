import AddTaskForm from "./TaskForm/AddTaskForm";
import Task from "./Task/Task.tsx";
import './App.css';
import { useState } from "react";

interface Task {
    text: string;
    id: number;
}

const App = () => {
    const [tasks] = useState<Task[]>([
        {text: 'Do home work', id: 1},
        {text: 'Cook dinner', id: 2},
        {text: 'Do house cleaning', id: 3},
        {text: 'Feed the pets', id: 4},
        {text: 'Cutting firewood', id: 5},
    ]);

    const taskList = tasks.map((task => <Task text={task.text} id={task.id} />));

    return (
        <div id="root">
            <AddTaskForm />
            {taskList}
        </div>
    );
}

export default App;