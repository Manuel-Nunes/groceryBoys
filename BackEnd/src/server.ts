import Express from 'express';
import bodyParser from 'body-parser';

import { myFunc } from './utils.js';

const app = Express();
const port = 3000;
app.use(bodyParser.json())

// ToDo write middleware to add user emaile to request.user.email


app.get('/', (req: Express.Request,res: Express.Response) => {
  res.send('Hello World');
});

app.get('/myFunc', (req: Express.Request,res: Express.Response) => {
  res.send(myFunc());
});

app.get('/MyName',(req: Express.Request, res: Express.Response) => {
  res.send('Welcome my name');
});

app.post('/shareToUser',(req, res)=>{
  const friend = req.body.FriendID
  console.log(friend);
  res.send("Wow")
})

app.listen(port, () => {
  console.log(`Listing on http://localhost:${port}`);
});
