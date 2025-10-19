import { Request, Response } from 'express';

// @desc    Get current star system data
// @route   GET /api/systems/current
// @access  Private
export const getCurrentSystemData = async (req: Request, res: Response) => {
  // Placeholder data
  const systemData = {
    name: 'Kepler-186f System',
    planetCount: 5,
    planets: [
      { name: 'Kepler-186f I', type: 'Rocky', isExplored: true },
      { name: 'Kepler-186f II', type: 'Gas Giant', isExplored: false },
    ]
  };
  res.status(200).json(systemData);
};
