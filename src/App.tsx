import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import ITodoItem from './interfaces/ITodoItem'
import TaskCard from './components/TaskCard'
import getTasks from './utils/fetches/getTasks'

function App() {

  const [todoItems, setTodoItem] = useState<ITodoItem[]>([]);

  useEffect(() => {
    getTasks(setTodoItem);
  }, [todoItems])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="w-96 px-20 py-10 flex flex-col gap-6 border-2">
        <h1 className="text-3xl font-bold underline">Supabase Todo</h1>
        <AddTask />
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