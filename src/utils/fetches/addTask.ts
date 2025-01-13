import supabase from "../backend/setupSupabase"

const addTask = async (taskTitle: string) => {
    const { error } = await supabase.from('todoItems').insert({ userId: 1, title: taskTitle })
    if(error) console.error(error);

}

export default addTask;