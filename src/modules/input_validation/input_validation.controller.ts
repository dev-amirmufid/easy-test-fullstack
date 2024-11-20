import { Request, Response } from 'express';
import { isValidBracketSequence } from './input_validation.service';

export const inputValidation = async (req: Request, res: Response) => {
  try {
    const result = await isValidBracketSequence(req.body.input);
    
    res.json({result});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
