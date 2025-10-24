import { CreateTodoDto } from "@galaxify/commons";
import { Todo } from "../todo.model";

export const createTodoCommand = async (
  userId: string,
  { title, description }: CreateTodoDto
) => {
  const newTodo = await Todo.create({
    userId,
    title,
    description,
  });

  return newTodo;
};
