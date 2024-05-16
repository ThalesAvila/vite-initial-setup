import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Adicionar destino"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => {
          dispatch({
            type: "added",
            id: nextId++,
            text,
          });
        }}
      >
        Adicionar
      </button>
    </>
  );
}

let nextId = 4;
