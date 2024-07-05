import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

type ToDoProps = {
  id?: number;
  todo?: string;
  onClose?: () => void;
};

const ToDo: React.FC<ToDoProps> = ({ id, todo, onClose }) => {
  const [text, setText] = useState<string>();
  const [description, setDescription] = useState(todo);

  const [viewEdit, setViewEdit] = useState<boolean>(true);

  useEffect(() => {
    setText(todo);
  }, [todo]);

  const handleViewEdit = () => {
    setViewEdit(false);
  };

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
          {text ? (
            <div className="w-[400px] min-h-[500px] bg-[#fff] border-[5px] border-[#e6deeb]">
              <div
                className="
                w-full h-[50px] 
                flex justify-center items-center
                bg-[#e6deeb]
              "
              >
                <h1 className="text-[24px] font-bold text-center text-[#9191dd]">
                  Task Id: {id}
                </h1>
              </div>
              <div className="p-[15px]">
                <p>{text}</p>
                <button onClick={onClose}>Close</button>
                <button onClick={handleViewEdit}>
                  <Pencil size={20} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="w-[400px] min-h-[500px] bg-[#fff] border-[5px] border-[#e6deeb]">
          <div
            className="
                w-full h-[50px] 
                flex justify-center items-center
                bg-[#e6deeb]
              "
          >
            <h1 className="text-[24px] font-bold text-center text-[#9191dd]">
              Task Id: {id}
            </h1>
          </div>
          <div className="p-[15px]">
            <form onSubmit={(e) => handleSubmit(e)}>
              <textarea
                className="w-[100%] h-[100px] border-[2px] border-solid border-[#e6deeb] p-[10px] rounded-[15px]"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                type="submit"
                className="
                  w-full h-[40px] bg-[#e6deeb] mt-[10px] rounded-[20px] text-[#9191dd] font-[600]
                  hover:bg-[#9191dd] hover:text-[#e6deeb]
                "
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setViewEdit(true)}
              className="
                  w-full h-[40px] bg-[#e6deeb] mt-[10px] rounded-[20px] text-[#9191dd] font-[600]
                  hover:bg-[#9191dd] hover:text-[#e6deeb]
                "
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDo;
