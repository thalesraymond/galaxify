import { Router } from 'express';
import { getShipData, craftShipPart } from '../controllers/shipController';

const router = Router();

router.get('/', getShipData);
router.post('/craft', craftShipPart);

export default router;
