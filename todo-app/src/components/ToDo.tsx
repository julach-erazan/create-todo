import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

type ToDoProps = {
  id?: number;
  todo?: string;
  onClose?: () => void;
};

const ToDo: React.FC<ToDoProps> = ({ id, todo, onClose }) => {
  const [text, setText] = useState<string>();
  const [title, setTitle] = useState<any>(id);
  const [description, setDescription] = useState(todo);

  const [viewEdit, setViewEdit] = useState<boolean>(true);

  useEffect(() => {
    setText(todo);
  }, [todo]);

  const handleViewEdit = () => {
    setViewEdit(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch(`https://dummyjson.com/todos/${title}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: description,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      {viewEdit ? (
        <div>
          <p>{id}</p>
          <p>{text}</p>
          {text ? (
            <div>
              <button onClick={onClose}>Close</button>
              <button onClick={handleViewEdit}>
                <Pencil size={20} />
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" >Submit</button>
          </form>
          <button onClick={() => setViewEdit(true)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
