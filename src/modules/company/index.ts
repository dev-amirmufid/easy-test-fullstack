import { Router } from 'express';
import { activeCompanies } from './company.controller';

const router = Router();

router.post('/', activeCompanies);

export default router;
