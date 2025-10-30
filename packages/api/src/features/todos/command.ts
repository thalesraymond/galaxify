import { CreateTodoDto, UpdateTodoDto } from '@galaxify/commons';
import { TodoModel } from './todo.model.js';
import NotFoundError from '../../errors/NotFoundError.js';

export const createTodo = async (userId: string, dto: CreateTodoDto) => {
  const todo = await TodoModel.create({ ...dto, userId });
  return todo.toJSON();
};

export const getTodos = async (userId: string) => {
  const todos = await TodoModel.find({ userId });
  return todos.map((todo) => todo.toJSON());
};

export const getTodo = async (userId: string, todoId: string) => {
  const todo = await TodoModel.findOne({ _id: todoId, userId });
  if (!todo) {
    throw new NotFoundError('Todo not found');
  }
  return todo.toJSON();
};

export const updateTodo = async (
  userId: string,
  todoId: string,
  dto: UpdateTodoDto
) => {
  const todo = await TodoModel.findOneAndUpdate(
    { _id: todoId, userId },
    dto,
    { new: true }
  );
  if (!todo) {
    throw new NotFoundError('Todo not found');
  }
  return todo.toJSON();
};

export const deleteTodo = async (userId: string, todoId: string) => {
  const result = await TodoModel.deleteOne({ _id: todoId, userId });
  if (result.deletedCount === 0) {
    throw new NotFoundError('Todo not found');
  }
};

export const checkTodo = async (userId: string, todoId: string) => {
  const todo = await TodoModel.findOneAndUpdate(
    { _id: todoId, userId },
    { completed: true },
    { new: true }
  );
  if (!todo) {
    throw new NotFoundError('Todo not found');
  }
  return todo.toJSON();
};
