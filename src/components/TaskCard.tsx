import ITodoItem from "../interfaces/ITodoItem";
import removeTask from "../utils/fetches/removeTask";
import updateTask from "../utils/fetches/updateTask";

interface ITodoListProps {
    todoItem: ITodoItem
}

const TaskCard: React.FC<ITodoListProps> = ({ todoItem }) => {
    return (  
        <div className="flex flex-col">
            <p>User: {todoItem.userId}</p>
            <p>Title: {todoItem.title}</p>
            <p>Completed: {todoItem.completed ? 'yes' : 'no'}</p>
            {
                !todoItem.completed ? (
                    <>
                        <button onClick={() => updateTask(todoItem.id)} className="text-green-500 cursor-pointer">Mark as completed</button>
                        <button onClick={() => removeTask(todoItem.id)} className="text-red-500 cursor-pointer">X</button>
                    </>
                )
                : (
                    <>gar nichts</>
                )
            }
        </div>
    );
}

export default TaskCard;