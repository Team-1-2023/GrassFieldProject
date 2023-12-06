const express = require('express');
const db= require('./models/index.js')


const app = express();

const port = 3000;

const basketRouter = require('./routers/basketRouter.js')
const adminRouter = require('./routers/adminRouter.js')
const productsRouter = require('./routers/productsRouter.js')
const usersRouter = require('./routers/usersRouter.js')
app.use(express.json())
app.use('/api/basket',basketRouter)
app.use('/api/admin',adminRouter)
app.use('/api/products',productsRouter)
app.use('/api/users/',usersRouter)

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));