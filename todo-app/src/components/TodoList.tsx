import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { todosStore, Todo } from "../store/todoStore";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import ToDo from "./ToDo";

const ITEMS_PER_PAGE = 5;

const TodoList: React.FC = () => {
  const todos = useStore(todosStore);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingTodo, setEditingTodo] = useState<Todo>({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleDelete = (id: number) => {
    todosStore.set(todos.filter((todo) => todo.id !== id));

    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleViewTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setIsPopupVisible(true);
  };

  const paginatedTodos = todos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      {paginatedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onView={handleViewTodo}
        />
      ))}
      <Pagination
        totalItems={todos.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {isPopupVisible ? (
        <div className="w-full h-full backdrop-blur-sm absolute top-0 z-100">
          <ToDo
            id={editingTodo.id}
            todo={editingTodo.todo}
            onClose={handleClosePopup}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoList;
