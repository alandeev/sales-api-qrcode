import { Router } from 'express'
import authRouters from './auth.routes'
import userRouters from './user.routes'

const routers = Router()

routers.use('/auth', authRouters)
routers.use('/users', userRouters)

export default routers;
