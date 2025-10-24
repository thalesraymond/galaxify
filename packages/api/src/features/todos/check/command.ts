import { BadRequestError } from "../../../errors/BadRequestError";
import { NotFoundError } from "../../../errors/NotFoundError";
import { Todo } from "../todo.model";

export const checkTodoCommand = async (userId: string, todoId: string) => {
  const todo = await Todo.findOne({ _id: todoId, userId });

  if (!todo) {
    throw new NotFoundError("Todo not found");
  }

  if (todo.completed) {
    throw new BadRequestError("Todo is already checked");
  }

  todo.completed = true;
  await todo.save();

  return todo;
};
