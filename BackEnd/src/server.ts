import Express from 'express';

import { myFunc } from './utils.js';

const app = Express();
const port = 3000;


app.get('/', (req: Express.Request,res: Express.Response) => {
  res.send('Hello World');
});

app.get('/myFunc', (req: Express.Request,res: Express.Response) => {
  res.send(myFunc());
});

app.get('/MyName',(req: Express.Request, res: Express.Response) => {
  res.send('Welcome my name');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
