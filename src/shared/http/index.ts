import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import '../typeorm/database'
import errorHandler from '@shared/middleware/error-handler';
import express from 'express'
import globalRoutes from './routers';
import morgan from 'morgan'
import cors from 'cors'

const app = express()

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())

app.use(express.json());

app.use(globalRoutes)

app.use(errorHandler)

app.listen(3333, () => {
  console.log({
    server: "ON",
    port: 3333
  })
});