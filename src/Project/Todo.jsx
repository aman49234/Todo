import "./Todo.css";
import { useState } from "react";
import  {MdCheck, MdDeleteForever} from "react-icons/md";
import { TodoForm } from "./TodoForm";
export const Todo = () => {
     
     const [task, setTask] = useState([]);
     
     
     

     const handleFormSubmit = (event) =>{
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) return;

        setTask((prev) => [...prev, inputValue]);

        setInputValue("");
     };

     const handleDeleteTodo = (value)=>{
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
           setTask(updatedTask);
     };
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
           <TodoForm onAddTOdo/>
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) =>
                        {
                            return <li key = {index} className="todo-item">
                            <span>{curTask}</span>
                           
                            <button className="check-btn">
                            <MdCheck />
                            </button>
                             <button className="delete-btn"
                             onClick={()=> handleDeleteTodo(curTask)}>
                            <MdDeleteForever />
                            </button>
                                </li>
                        })
                    }
                </ul>

            </section>

        </section>
    )
}
