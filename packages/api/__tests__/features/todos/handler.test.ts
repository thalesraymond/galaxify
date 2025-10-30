import { describe, it, expect, vi, beforeEach, afterEach, type Mock } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import {
  createTodoHandler,
  getTodosHandler,
  getTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
  checkTodoHandler,
} from '../../../src/features/todos/handler';
import * as command from '../../../src/features/todos/command';
import { StatusCodes } from 'http-status-codes';

vi.mock('../../../src/features/todos/command');

describe('Todo Handlers', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let status: ReturnType<typeof vi.fn>;
  let json: ReturnType<typeof vi.fn>;
  let send: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    status = vi.fn();
    json = vi.fn();
    send = vi.fn();
    res = {
      status,
      json,
      send,
    };
    next = vi.fn();
    status.mockReturnValue(res);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('createTodoHandler', () => {
    it('should create a todo and return 201', async () => {
      req = {
        user: { id: 'user-123' },
        body: { title: 'Test Todo' },
      } as any;
      const todo = { title: 'Test Todo' };
      (command.createTodo as Mock).mockResolvedValue(todo);

      await createTodoHandler(req as Request, res as Response, next);

      expect(command.createTodo).toHaveBeenCalledWith(req.user!.id, req.body);
      expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
      expect(res.json).toHaveBeenCalledWith(todo);
    });
  });

  describe('getTodosHandler', () => {
    it('should return a list of todos and 200', async () => {
      req = {
        user: { id: 'user-123' },
      } as any;
      const todos = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
      (command.getTodos as Mock).mockResolvedValue(todos);

      await getTodosHandler(req as Request, res as Response, next);

      expect(command.getTodos).toHaveBeenCalledWith(req.user!.id);
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(todos);
    });
  });

  describe('getTodoHandler', () => {
    it('should return a single todo and 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'todo-123' },
      } as any;
      const todo = { title: 'Test Todo' };
      (command.getTodo as Mock).mockResolvedValue(todo);

      await getTodoHandler(req as Request, res as Response, next);

      expect(command.getTodo).toHaveBeenCalledWith(req.user!.id, req.params!.id);
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(todo);
    });
  });

  describe('updateTodoHandler', () => {
    it('should update a todo and return 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'todo-123' },
        body: { title: 'Updated Todo' },
      } as any;
      const todo = { title: 'Updated Todo' };
      (command.updateTodo as Mock).mockResolvedValue(todo);

      await updateTodoHandler(req as Request, res as Response, next);

      expect(command.updateTodo).toHaveBeenCalledWith(
        req.user!.id,
        req.params!.id,
        req.body
      );
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(todo);
    });
  });

  describe('deleteTodoHandler', () => {
    it('should delete a todo and return 204', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'todo-123' },
      } as any;
      (command.deleteTodo as Mock).mockResolvedValue(undefined);

      await deleteTodoHandler(req as Request, res as Response, next);

      expect(command.deleteTodo).toHaveBeenCalledWith(
        req.user!.id,
        req.params!.id
      );
      expect(res.status).toHaveBeenCalledWith(StatusCodes.NO_CONTENT);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('checkTodoHandler', () => {
    it('should check a todo and return 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'todo-123' },
      } as any;
      const todo = { completed: true };
      (command.checkTodo as Mock).mockResolvedValue(todo);

      await checkTodoHandler(req as Request, res as Response, next);

      expect(command.checkTodo).toHaveBeenCalledWith(req.user!.id, req.params!.id);
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(todo);
    });
  });
});
