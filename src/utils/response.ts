import { Response } from 'express';

export const response = (res: Response, statusCode: number, data?: object) => {
  if (res && !res.headersSent) {
    res.statusCode = statusCode;
    res.json(data);
  }
}
