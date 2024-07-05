import React from "react";
import { Todo } from "../store/todoStore";
import { Trash } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onView: (todo: Todo) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onView }) => {
  return (
    <div className="border p-4 flex justify-between items-center">
      <div onClick={() => onView(todo)}>
        <p>{todo.todo}</p>
      </div>
      <div className="flex">
        <button onClick={() => onDelete(todo.id)}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
