import express from 'express';
import customerModule from '../modules/customer';
import batteryModule from '../modules/battery';
import companyModule from '../modules/company';
import inputValidationModule from '../modules/input_validation';

const router = express.Router();

router.use('/battery', batteryModule);
router.use('/input_validation', inputValidationModule);
router.use('/company', companyModule);
router.use('/customers', customerModule);
export default router;
