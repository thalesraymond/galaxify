import { Router } from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import * as handler from './handler.js';

const router = Router();

router.post('/', authenticate, handler.createTodoHandler);
router.get('/', authenticate, handler.getTodosHandler);
router.get('/:id', authenticate, handler.getTodoHandler);
router.put('/:id', authenticate, handler.updateTodoHandler);
router.delete('/:id', authenticate, handler.deleteTodoHandler);
router.post('/:id/check', authenticate, handler.checkTodoHandler);

export default router;
