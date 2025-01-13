import supabase from "../backend/setupSupabase"

const removeTask = async (taskId: number) => {

    const { error } = await supabase.from('todoItems').delete().eq('id', taskId);
    if(error) console.error(`Error by deleting the task: ${error}`);

}

export default removeTask;