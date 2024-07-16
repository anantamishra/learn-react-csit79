import React, { useState } from 'react';
import './App.css';

function TODO() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className='flex min-h-screen w-full justify-center items-center flex-col'>
            <div className='p-10 shadow rounded border flex flex-col gap-2'>
                <h1 className='font-bold'>TO DOs</h1>
                <div className='flex gap-2'>
                    <input
                        type="text"
                        placeholder="Add to item"
                        className='border border-black p-2 rounded'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        className='bg-red-500 rounded-sm text-white font-bold h-10 w-10 flex justify-center items-center'
                        onClick={addTask}
                    >
                        +
                    </button>
                </div>
                <div className='mt-4'>
                    {tasks.map((task, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <input
                                type="checkbox"
                                id={`task-${index}`}
                                checked={task.completed}
                                onChange={() => toggleTask(index)}
                            />
                            <label
                                htmlFor={`task-${index}`}
                                className={task.completed ? 'line-through' : ''}
                            >
                                {task.text}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TODO;
