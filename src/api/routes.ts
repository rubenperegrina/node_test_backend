import express, { Request, Response } from 'express';

import { getCountries } from '../services/countries';
import { reverseText } from '../services/reverse';
import appendString from '../services/append';
import { response } from '../utils/response';


type ResponseData = {
  error?: {
    message: string
  },
  data?: object
}

const api = express.Router();

//Countries
api.get('/countries', async (req: Request, res: Response) => {
  const filter = req.query.filter?.toString();
  const order = req.query.order?.toString();

  const result: ResponseData = await getCountries(filter, order);

  if (result.error) response(res, 502, { status: 'Error', details: result.error.message });
  else response(res, 200, { data: result.data });
});


//Reverse
api.get('/reverse/:text', (req: Request, res: Response) => {
    const result: ResponseData = reverseText(req.params.text);
    response(res, 200, { data: result.data });
  });

//Append
api.post('/append', (req: Request, res: Response) => {
    const start = req.query.start?.toString();
    const end = req.query.end?.toString();
  
    const result: ResponseData = appendString.append(start, end);
  
    if (result.error) response(res, 502, { status: 'Error', details: result.error.message });
    else response(res, 200, { data: result.data });
  });

export default api;
