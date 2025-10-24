import { UpdateTodoDto } from "@galaxify/commons";
import NotFoundError from "../../../errors/NotFoundError.js";
import { Todo } from "../todo.model.js";

export const updateTodoCommand = async (
  userId: string,
  todoId: string,
  updateData: UpdateTodoDto
) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: todoId, userId },
    updateData,
    { new: true }
  );

  if (!todo) {
    throw new NotFoundError("Todo not found");
  }

  return todo;
};
