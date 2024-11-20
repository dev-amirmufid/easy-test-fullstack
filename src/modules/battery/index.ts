import { Router } from 'express';
import { batteryStatus, batteryStatusView } from './battery.controller';

const router = Router();

router.get('/', batteryStatusView);
router.post('/', batteryStatus);

export default router;
