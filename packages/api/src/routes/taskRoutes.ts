import { Router } from 'express';
import { createTask, completeTask } from '../controllers/taskController';

const router = Router();

router.post('/', createTask);
router.post('/:id/complete', completeTask);

export default router;
