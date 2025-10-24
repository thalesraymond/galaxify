import { Todo } from "../todo.model";

export const getAllTodosCommand = async (userId: string) => {
  const todos = await Todo.find({ userId });
  return todos;
};
