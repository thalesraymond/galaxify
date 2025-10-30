import { describe, it, expect, vi, type Mock } from 'vitest';
import * as command from '../../../src/features/todos/command';
import { TodoModel } from '../../../src/features/todos/todo.model';
import NotFoundError from '../../../src/errors/NotFoundError';

vi.mock('../../../src/features/todos/todo.model');

describe('Todo Command', () => {
  const userId = 'user-123';
  const todoId = 'todo-123';

  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('createTodo', () => {
    it('should create a new todo', async () => {
      const dto = {
        title: 'Test Todo',
        description: 'Test Description',
        dueDate: new Date(),
      };
      const todo = { ...dto, userId, toJSON: () => todo };
      (TodoModel.create as Mock).mockResolvedValue(todo);

      const result = await command.createTodo(userId, dto);

      expect(TodoModel.create).toHaveBeenCalledWith({ ...dto, userId });
      expect(result).toEqual(todo);
    });
  });

  describe('getTodos', () => {
    it('should return a list of todos', async () => {
      const todos = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
      (TodoModel.find as Mock).mockResolvedValue(
        todos.map((todo) => ({ ...todo, toJSON: () => todo }))
      );

      const result = await command.getTodos(userId);

      expect(TodoModel.find).toHaveBeenCalledWith({ userId });
      expect(result).toEqual(todos);
    });
  });

  describe('getTodo', () => {
    it('should return a single todo', async () => {
      const todo = { title: 'Test Todo' };
      (TodoModel.findOne as Mock).mockResolvedValue({
        ...todo,
        toJSON: () => todo,
      });

      const result = await command.getTodo(userId, todoId);

      expect(TodoModel.findOne).toHaveBeenCalledWith({ _id: todoId, userId });
      expect(result).toEqual(todo);
    });

    it('should throw NotFoundError if todo not found', async () => {
      (TodoModel.findOne as Mock).mockResolvedValue(null);

      await expect(command.getTodo(userId, todoId)).rejects.toThrow(
        NotFoundError
      );
    });
  });

  describe('updateTodo', () => {
    it('should update a todo', async () => {
      const dto = { title: 'Updated Todo' };
      const todo = { ...dto, toJSON: () => todo };
      (TodoModel.findOneAndUpdate as Mock).mockResolvedValue(todo);

      const result = await command.updateTodo(userId, todoId, dto);

      expect(TodoModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: todoId, userId },
        dto,
        { new: true }
      );
      expect(result).toEqual(todo);
    });

    it('should throw NotFoundError if todo not found', async () => {
      (TodoModel.findOneAndUpdate as Mock).mockResolvedValue(null);

      await expect(
        command.updateTodo(userId, todoId, {})
      ).rejects.toThrow(NotFoundError);
    });
  });

  describe('deleteTodo', () => {
    it('should delete a todo', async () => {
      (TodoModel.deleteOne as Mock).mockResolvedValue({ deletedCount: 1 });

      await command.deleteTodo(userId, todoId);

      expect(TodoModel.deleteOne).toHaveBeenCalledWith({ _id: todoId, userId });
    });

    it('should throw NotFoundError if todo not found', async () => {
      (TodoModel.deleteOne as Mock).mockResolvedValue({ deletedCount: 0 });

      await expect(command.deleteTodo(userId, todoId)).rejects.toThrow(
        NotFoundError
      );
    });
  });

  describe('checkTodo', () => {
    it('should check a todo', async () => {
      const todo = { completed: true, toJSON: () => todo };
      (TodoModel.findOneAndUpdate as Mock).mockResolvedValue(todo);

      const result = await command.checkTodo(userId, todoId);

      expect(TodoModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: todoId, userId },
        { completed: true },
        { new: true }
      );
      expect(result).toEqual(todo);
    });

    it('should throw NotFoundError if todo not found', async () => {
      (TodoModel.findOneAndUpdate as Mock).mockResolvedValue(null);

      await expect(command.checkTodo(userId, todoId)).rejects.toThrow(
        NotFoundError
      );
    });
  });
});
