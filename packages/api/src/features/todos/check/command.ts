import BadRequestError from "../../../errors/BadRequestError.js";
import NotFoundError from "../../../errors/NotFoundError.js";
import { Todo } from "../todo.model.js";

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
