import { Request, Response } from 'express';

export class HelloController {
  public hello = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({ message: 'Hello World!!!' });
  };
}
