import { Request, Response } from 'express';

// @desc    Get current user's ship data
// @route   GET /api/ship
// @access  Private
export const getShipData = async (req: Request, res: Response) => {
  // Placeholder data
  const shipData = {
    name: 'UNS Pioneer',
    partSlots: 4,
    parts: [
      { name: 'Standard Scanner', type: 'SCANNER', description: 'A basic scanner.', effects: [] }
    ]
  };
  res.status(200).json(shipData);
};

// @desc    Craft a new ship part
// @route   POST /api/ship/craft
// @access  Private
export const craftShipPart = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Ship part crafted successfully' });
};
