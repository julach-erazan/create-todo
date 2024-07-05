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
    <div className="w-full min-h-[150px] flex justify-center items-center p-[10px]">
      <form onSubmit={handleSubmit(submitHandler)}>
        <textarea 
        className="w-[500px] h-[100px]"
        {...register("todo")} placeholder="Description" 
        />
        {errors.description && <p>{errors.description.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
