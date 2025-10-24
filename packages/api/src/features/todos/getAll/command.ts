import { Todo } from "../todo.model.js";

export const getAllTodosCommand = async (userId: string) => {
  const todos = await Todo.find({ userId });
  return todos;
};
