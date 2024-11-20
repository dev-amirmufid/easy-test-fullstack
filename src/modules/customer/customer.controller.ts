import { Request, Response } from 'express';
import { getCustomersQuery } from './customer.service';

export const getCustomersByQuery = async (req: Request, res: Response) => {
  try {
    const customers = await getCustomersQuery();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
