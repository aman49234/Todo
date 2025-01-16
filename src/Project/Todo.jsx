import "./Todo.css";
import { useState } from "react";
import  {MdCheck, MdDeleteForever} from "react-icons/md";

export const Todo = () => {
     const [inputValue, setInputValue] = useState("");
     const [task, setTask] = useState([]);
     
     
     const handleInputChange = (value) => {
        setInputValue(value);
     };

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
            <section className="form">
                <form onSubmit={handleFormSubmit}> 
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue}
                        onChange = {(event) => handleInputChange(event.target.value)}/>
                  
                  </div>
                     <button type="submit" className="todo-btn">Add Task</button>
                  
                </form>
            </section>

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
