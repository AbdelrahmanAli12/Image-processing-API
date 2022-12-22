import express from 'express';
import api from './routes/api';
const app = express();
const port = 3030;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

app.get('/', (req, res) => {
  res.json('The server is connected');
});

app.use('/api', api);

export default app;
