const express = require('express')
const compression=require('compression')
const cors=require('cors');
const connct = require('./config/config');
const app = express()
const port = 3000
connct();
app.use(express.json());
app.use(cors());
app.use(require('./api/user.api'));
app.use(require('./api/msg.api'));
app.use(compression())
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port||process.env.PORT, () => console.log(`Example app listening on port ${port}!`))