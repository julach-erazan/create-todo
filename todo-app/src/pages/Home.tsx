import React, { useEffect } from "react";
import TodoList from "../components/TodoList";
import { todosStore, Todo } from "../store/todoStore";
import TodoPopup from "../components/ToDo";
import ToDoForm from "../components/ToDoForm";

const Home: React.FC = () => {
  const fetchTasks = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        todosStore.set(data.todos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = (todo: Todo) => {
    todosStore.set([
      ...todosStore.get(),
      { ...todo, id: Date.now(), completed: false },
    ]);

    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: todo.todo,
        completed: todo.completed,
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <ToDoForm onSubmit={handleCreate} />
      <TodoList />
      <TodoPopup />
    </div>
  );
};

export default Home;
