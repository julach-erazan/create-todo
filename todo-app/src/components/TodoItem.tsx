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
    <div
      className="
      border-[2px] border-solid border-[#e6deeb] px-[20px] 
      py-[10px] flex justify-between items-center
      rounded-[25px]
      mb-[10px]
      text-[#9191dd]
      hover:bg-[#e6deeb]
      cursor-pointer
      "
    >
      <div onClick={() => onView(todo)} className="w-full">
        <p>{todo.todo}</p>
      </div>
      <div className="flex">
        <button onClick={() => onDelete(todo.id)}>
          <Trash size={20} className="text-[red]" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
