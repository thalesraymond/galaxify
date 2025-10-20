import { Router } from 'express';
import { RegistrationController } from '../controllers/RegistrationController';

const router = Router();
const registrationController = new RegistrationController();

router.post('/api/v1/register', registrationController.handle);

export default router;
