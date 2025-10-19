import { Request, Response } from 'express';

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
export const createTask = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Task created successfully' });
};

// @desc    Mark a task as complete
// @route   POST /api/tasks/:id/complete
// @access  Private
export const completeTask = async (req: Request, res: Response) => {
  // Simple reward logic placeholder
  const rewards = [
    { resourceType: 'Alloy Plates', quantity: Math.floor(Math.random() * 5) + 1 },
    { resourceType: 'Bio-Fuel', quantity: Math.floor(Math.random() * 3) + 1 },
  ];
  res.status(200).json({ message: 'Task marked as complete', rewards });
};
