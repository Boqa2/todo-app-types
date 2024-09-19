import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { TodoResponse } from "../lib/types/TodoTypes";

const url = "http://localhost:3000/todos";

export default function Todo() {
  const [todos, setTodos] = useState<TodoResponse | null>(null);
  const [value, setValue] = useState
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data: TodoResponse = await response.json();
      setTodos(data);
    })();
  });
  return (
    <div className="space-x-4 w-2/3">
      <h1 className="text-3xl mb-3 font-bold text-center">Todo App</h1>
      <div className="bg-indigo-300 p-12 rounded-lg">
        <div className="flex gap-4">
          <SearchBar />
          <button className="px-4 py-2 rounded-lg bg-green-800 text-white">
            Add new
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {todos ? (
            todos.map((task) => (
                <div className="flex justify-between gap-1">

                    <div className="flex justify-between gap-4">
                        <p className="text-xl">{task.title}</p>{""} <p className="self-end">{task.date}</p>
                    </div>
                    <div className="space-x-2">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-xl">Edit</button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded-xl">Delete</button>
                    </div>
                </div>
            ))
          ) : (
            <div> loading....</div>
          )}
        </div>
      </div>
    </div>
  );
}
