import { Router } from 'express'
import authRouters from './auth.routes'

const routers = Router()

routers.use('/auth', authRouters)

export default routers;
