import 'express-async-errors'
import './database/connection'
import routers from './routers'
import express from 'express'
import errorHandler from './middlewares/error-handler'
const app = express()

app.use(express.json())

app.use('/api', routers)

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Server working in port: 3000")
})