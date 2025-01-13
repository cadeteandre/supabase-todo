import { useEffect, useState } from 'react'
import './App.css'
import ITodoItem from './interfaces/ITodoItem'
import TaskCard from './components/TaskCard'
import getTasks from './utils/fetches/getTasks'
import NewTask from './components/newTask'

function App() {

  const [todoItems, setTodoItem] = useState<ITodoItem[]>([]);

  useEffect(() => {
    getTasks(setTodoItem);
  }, [todoItems])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="w-100 px-10 py-10 flex flex-col gap-6 border-2 rounded-xl border-cyan-700">
        <h1 className="text-3xl font-bold text-cyan-700 text-center">Supabase Todo</h1>
        <NewTask />
        {
          todoItems.map((todoItem) => (
            <TaskCard key={todoItem.id} todoItem={todoItem} />
          ))
        }
      </section>
    </div>
  )
}

export default App