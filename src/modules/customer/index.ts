import { Router } from 'express';
import { getCustomersByQuery } from './customer.controller';

const router = Router();

router.get('/', getCustomersByQuery);

export default router;
