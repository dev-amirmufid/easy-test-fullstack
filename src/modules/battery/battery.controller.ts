import { Request, Response } from 'express';
import { manageBattery } from './battery.service';

export const batteryStatus = async (req: Request, res: Response) => {
  try {
    const batterys = await manageBattery(req.body.inputs);
    res.json(batterys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const batteryStatusView = async (req: Request, res: Response) => {
  try {
    const inputs = Array.isArray(req.query.inputs) ? req.query.inputs : [req.query.inputs];
    const batterys = await manageBattery(inputs?.map((item: string) => Number(item)));
    
    console.log({ percent: batterys.last_battery_percent, color: batteryColor(batterys.last_battery_percent) })
    res.render('battery', { percent: batterys.last_battery_percent, color: batteryColor(batterys.last_battery_percent) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const batteryColor = (percent: number) => {
  let color = 'red';
  if (percent > 80) {
      color = 'green';
  } else if (percent > 50) {
      color = 'orange';
  }
  return color;
}