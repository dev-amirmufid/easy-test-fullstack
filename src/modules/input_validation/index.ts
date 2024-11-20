import { Router } from 'express';
import { inputValidation } from './input_validation.controller';

const router = Router();

router.post('/', inputValidation);

export default router;
