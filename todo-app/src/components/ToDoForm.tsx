import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Todo } from "../store/todoStore";

type ToDoFormProps = {
  onSubmit: (data: Todo) => void;
  defaultValues?: Todo;
};

const schema = yup.object().shape({
  todo: yup.string().required(),
});

const ToDoForm: React.FC<ToDoFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const submitHandler: SubmitHandler<Todo> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="w-full min-h-[150px] flex justify-center items-center px-[10px] py-[20px]">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center items-center"
      >
        <textarea
          className="w-[500px] h-[100px] border-[2px] border-solid border-[#e6deeb] p-[10px] rounded-[15px]"
          {...register("todo")}
          placeholder="New Task..."
        />
        {errors.description && <p>{errors.description.message}</p>}
        <button
          type="submit"
          className="
          w-full h-[40px] bg-[#e6deeb] mt-[10px] rounded-[20px] text-[#9191dd] font-[600]
          hover:bg-[#9191dd] hover:text-[#e6deeb]
        "
        >
          Add New Task
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
