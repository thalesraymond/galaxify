import NotFoundError from "../../../errors/NotFoundError.js";
import { Todo } from "../todo.model.js";

export const getTodoByIdCommand = async (userId: string, todoId: string) => {
  const todo = await Todo.findOne({ _id: todoId, userId });
  if (!todo) {
    throw new NotFoundError("Todo not found");
  }
  return todo;
};
