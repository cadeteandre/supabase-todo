import supabase from "../backend/setupSupabase"

const updateTask = async (taskId: number) => {
    const { error } = await supabase
    .from('todoItems')
    .update({ completed: true})
    .eq('id', taskId);

    if(error) console.error(`Error by updating task: ${error}`);
}

export default updateTask;