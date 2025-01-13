import ITodoItem from "../../interfaces/ITodoItem";
import supabase from "../backend/setupSupabase";

const getTasks = async (setTask: React.Dispatch<React.SetStateAction<ITodoItem[]>>) => {
    const { data, error } = await supabase.from('todoItems').select();
    if(!error) setTask(data);
    else console.error(`Error by fetching tasks: ${error}`);
}

export default getTasks;