import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./tasksReducer";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

export default function ToDoList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleDeleteAll() {
    dispatch({
      type: "deletedAll",
    });
  }

  function handleCompleteAll() {
    dispatch({
      type: "completeAll",
    });
  }

  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Itinerario Rio de Janeiro
          </h1>
          <AddTask />
          <TaskList tasks={tasks} />
          <button
            onClick={handleCompleteAll}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Completar Todas
          </button>
          <button
            onClick={handleDeleteAll}
            className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-text-red-500 hover:border-transparent rounded"
          >
            Deletar Todos
          </button>
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

const initialTasks = [
  { id: 0, text: "Cristo Redentor", done: true },
  { id: 1, text: "Jardim Botânico e Parque Lage", done: false },
  { id: 2, text: "Lagoa Rodrigo de Freitas", done: true },
  { id: 3, text: "Ipanema", done: false },
];
