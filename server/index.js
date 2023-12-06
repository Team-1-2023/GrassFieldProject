const express = require('express');
const db= require('./models/index.js')


const app = express();

const port = 3000;

const basketRouter = require('./routers/basketRouter.js')
app.use(express.json())
app.use('/api/basket',basketRouter)

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));