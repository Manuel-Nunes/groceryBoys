import Express from 'express';
import { myFunc } from './utils.js';
const app = Express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/myFunc', (req, res) => {
    res.send(myFunc());
});
app.get('/MyName', (req, res) => {
    res.send('Welcome my name');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map