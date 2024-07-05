import { atom } from "nanostores";

export type Todo = {
  id?: number | any;
  title?: string;
  description?: string;
  completed?: boolean;
  userId?: number;
  todo?: string;
};

export const todosStore = atom<Todo[]>([]);
