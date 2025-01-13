import ITodoItem from "../interfaces/ITodoItem";
import removeTask from "../utils/fetches/removeTask";
import updateTask from "../utils/fetches/updateTask";

interface ITodoListProps {
    todoItem: ITodoItem
}

const TaskCard: React.FC<ITodoListProps> = ({ todoItem }) => {
    return (  
        <div className="flex items-center justify-between">
            <div className="flex flex-col mr-6">
                <p className="font-thin">
                    User: {todoItem.userId}
                </p>
                <p className="font-bold">
                    {todoItem.title}
                </p>
                <p>
                    Completed: 
                    {
                        todoItem.completed ? 
                        <span className="bg-green-200 font-thin p-1 rounded-md">
                            Yes
                        </span> 
                        : 
                        <span className="font-thin bg-red-200 rounded-md p-1">
                            Not yet
                        </span>
                    }
                </p>
            </div>
            {
                !todoItem.completed ? (
                    <div className="flex flex-col gap-2">
                        <div className="relative group">
                            <button 
                                onClick={() => updateTask(todoItem.id)} 
                                className="hover:bg-green-100 p-2 rounded-md">
                                ✅
                            </button>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1 text-center">
                                Mark as completed
                            </span>
                        </div>
                        <div className="relative group">
                            <button 
                                onClick={() => removeTask(todoItem.id)} 
                                className="hover:bg-red-100 p-2 rounded-md">
                                ❌
                            </button>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1 text-center">
                                Remove task
                            </span>
                        </div>
                    </div>
                )
                : (
                    <div className="relative group">
                        <button 
                            onClick={() => removeTask(todoItem.id)} 
                            className="hover:bg-red-100 p-2 rounded-md">
                            ❌
                        </button>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1 text-center">
                            Remove task
                        </span>
                    </div>
                )
            }
        </div>
    );
}

export default TaskCard;