import { Request, Response } from 'express';
import { processActiveCompanies } from './company.service';

export const activeCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await processActiveCompanies(req.body.input);
    
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
