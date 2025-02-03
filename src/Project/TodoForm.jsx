import { useState } from "react";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
 };

   const handleFormSubmit = () =>{
    
   }
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)} />

                </div>
                <button type="submit" className="todo-btn">
                    Add Task
                </button>

            </form>
        </section>



    )
}