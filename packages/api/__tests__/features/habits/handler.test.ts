import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import * as command from '../../../src/features/habits/command';
import * as handler from '../../../src/features/habits/handler';
import { StatusCodes } from 'http-status-codes';

vi.mock('../../../src/features/habits/command');

describe('Habit Handlers', () => {
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

  describe('createHabitHandler', () => {
    it('should create a habit and return 201', async () => {
      req = {
        user: { id: 'user-123' },
        body: { title: 'Test' },
      };
      const mockHabit = { id: 'habit-123', title: 'Test' };
      (command.createHabit as vi.Mock).mockResolvedValue(mockHabit);

      await handler.createHabitHandler(req as Request, res as Response, next);

      expect(command.createHabit).toHaveBeenCalledWith('user-123', {
        title: 'Test',
      });
      expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
      expect(res.json).toHaveBeenCalledWith(mockHabit);
    });
  });

  describe('getHabitsHandler', () => {
    it('should get habits and return 200', async () => {
      req = { user: { id: 'user-123' } };
      const mockHabits = [{ id: 'habit-1' }, { id: 'habit-2' }];
      (command.getHabits as vi.Mock).mockResolvedValue(mockHabits);

      await handler.getHabitsHandler(req as Request, res as Response, next);

      expect(command.getHabits).toHaveBeenCalledWith('user-123');
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(mockHabits);
    });
  });

  describe('getHabitHandler', () => {
    it('should get a single habit and return 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'habit-123' },
      };
      const mockHabit = { id: 'habit-123' };
      (command.getHabit as vi.Mock).mockResolvedValue(mockHabit);

      await handler.getHabitHandler(req as Request, res as Response, next);

      expect(command.getHabit).toHaveBeenCalledWith('user-123', 'habit-123');
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(mockHabit);
    });
  });

  describe('updateHabitHandler', () => {
    it('should update a habit and return 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'habit-123' },
        body: { title: 'Updated' },
      };
      const mockHabit = { id: 'habit-123', title: 'Updated' };
      (command.updateHabit as vi.Mock).mockResolvedValue(mockHabit);

      await handler.updateHabitHandler(req as Request, res as Response, next);

      expect(command.updateHabit).toHaveBeenCalledWith(
        'user-123',
        'habit-123',
        { title: 'Updated' }
      );
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(mockHabit);
    });
  });

  describe('deleteHabitHandler', () => {
    it('should delete a habit and return 204', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'habit-123' },
      };
      (command.deleteHabit as vi.Mock).mockResolvedValue(undefined);

      await handler.deleteHabitHandler(req as Request, res as Response, next);

      expect(command.deleteHabit).toHaveBeenCalledWith('user-123', 'habit-123');
      expect(res.status).toHaveBeenCalledWith(StatusCodes.NO_CONTENT);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('incrementHabitHandler', () => {
    it('should increment a habit and return 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'habit-123' },
      };
      const mockHabit = { id: 'habit-123', positiveCount: 1 };
      (command.incrementHabit as vi.Mock).mockResolvedValue(mockHabit);

      await handler.incrementHabitHandler(req as Request, res as Response, next);

      expect(command.incrementHabit).toHaveBeenCalledWith(
        'user-123',
        'habit-123'
      );
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(mockHabit);
    });
  });

  describe('decrementHabitHandler', () => {
    it('should decrement a habit and return 200', async () => {
      req = {
        user: { id: 'user-123' },
        params: { id: 'habit-123' },
      };
      const mockHabit = { id: 'habit-123', negativeCount: 1 };
      (command.decrementHabit as vi.Mock).mockResolvedValue(mockHabit);

      await handler.decrementHabitHandler(req as Request, res as Response, next);

      expect(command.decrementHabit).toHaveBeenCalledWith(
        'user-123',
        'habit-123'
      );
      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(res.json).toHaveBeenCalledWith(mockHabit);
    });
  });
});
