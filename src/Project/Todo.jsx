import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const Todo = () => {

    const [task, setTask] = useState([]);
    const handleFormSubmit = (inputValue) => 
        {

        if (!inputValue) return;
        if (task.includes(inputValue)) return;
        setTask((prev) => [...prev, inputValue]);
        };

    const handleDeleteTodo = (value) => 
        {
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
        };
    return (
           <section className="todo-container">
            <header>
            <h1>Todo List</h1>
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <TodoList
                                key={index}
                                data={curTask}
                                onHandleDeleteTodo={handleDeleteTodo} />);
                    })
                    }
                </ul>

            </section>

        </section>
    )
}
