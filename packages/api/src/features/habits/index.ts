import { Router } from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import * as handler from './handler.js';

const router = Router();

router.post('/', authenticate, handler.createHabitHandler);
router.get('/', authenticate, handler.getHabitsHandler);
router.get('/:id', authenticate, handler.getHabitHandler);
router.put('/:id', authenticate, handler.updateHabitHandler);
router.delete('/:id', authenticate, handler.deleteHabitHandler);
router.post('/:id/plus', authenticate, handler.incrementHabitHandler);
router.post('/:id/minus', authenticate, handler.decrementHabitHandler);

export default router;
