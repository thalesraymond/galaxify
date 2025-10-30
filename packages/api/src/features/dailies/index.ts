import { Router } from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import * as handler from './handler.js';

const router = Router();

router.post('/', authenticate, handler.createDailyHandler);
router.get('/', authenticate, handler.getDailiesHandler);
router.get('/:id', authenticate, handler.getDailyHandler);
router.put('/:id', authenticate, handler.updateDailyHandler);
router.delete('/:id', authenticate, handler.deleteDailyHandler);
router.post('/:id/check', authenticate, handler.checkDailyHandler);

export default router;
