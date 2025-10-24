import { NotFoundError } from "../../../errors/NotFoundError";
import { Todo } from "../todo.model";

export const getTodoByIdCommand = async (userId: string, todoId: string) => {
  const todo = await Todo.findOne({ _id: todoId, userId });
  if (!todo) {
    throw new NotFoundError("Todo not found");
  }
  return todo;
};
