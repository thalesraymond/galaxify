import { Router } from 'express';
import { getCurrentSystemData } from '../controllers/systemController';

const router = Router();

router.get('/current', getCurrentSystemData);

export default router;
