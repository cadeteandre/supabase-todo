import { useState } from "react";
import addTask from "../utils/fetches/addTask";

const AddTask = () => {

    const [inputTask, setInputTask] = useState<string>('');

    return (  
        <div>
            <input value={inputTask} onChange={(e) => setInputTask(e.target.value)} type="text" placeholder="type the task" />
            <button onClick={() => addTask(inputTask)}>Add task</button>
        </div>
    );
}

export default AddTask;