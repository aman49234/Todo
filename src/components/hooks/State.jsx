import { useState } from "react";

export const State =() =>{
  
    const handleButtonClick = ()=>{
        setCount(()=> count + 1);
        
    }
       const [count, setCount] = useState(0);
    return (
        <section className="flex flex-col justify-center items-center w-100 h-[80vh]">
        <h1>{count}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleButtonClick}>Increment</button>

        </section>
    );
};