import express, { Request, Response } from 'express';
import api from './routes/api';
const app = express();
const port: Number = 3030;

app.listen(port, (): void => {
  console.log(`server listening on ${port}`);
});

app.get('/', (req: Request, res: Response): void => {
  res.json('The server is connected');
});

app.use('/api', api);

export default app;
