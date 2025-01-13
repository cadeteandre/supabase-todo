import { useState } from "react";
import addTask from "../utils/fetches/addTask";

const NewTask = () => {

    const [inputTask, setInputTask] = useState<string>('');

    function handleClick() {
        addTask(inputTask);
        setInputTask('');
    }

    return (  
        <div className="flex flex-col items-center gap-2">
            <input className="border rounded-xl border-cyan-700 p-2" value={inputTask} onChange={(e) => setInputTask(e.target.value)} type="text" placeholder="Type the task title" />
            <button className="border rounded-xl p-2 w-40 border-cyan-700 hover:bg-cyan-700 hover:text-white" onClick={handleClick}>
                Add task
            </button>
        </div>
    );
}

export default NewTask;