import { NotFoundError } from "../../../errors/NotFoundError";
import { Todo } from "../todo.model";

export const deleteTodoCommand = async (userId: string, todoId: string) => {
  const todo = await Todo.findOneAndDelete({ _id: todoId, userId });

  if (!todo) {
    throw new NotFoundError("Todo not found");
  }
};
