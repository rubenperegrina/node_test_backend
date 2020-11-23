import express from 'express';
import  routes  from './api/routes';
import { port } from './config/config';

const app = express();

app.use('/', routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));

export default app;
