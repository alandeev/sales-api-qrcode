import { Router } from 'express'
import LoginController from '@controllers/auth/login'
import RegisterController from '../controllers/auth/register'

const routes = Router()

routes.post('/register', RegisterController)
routes.post('/login', LoginController)

export default routes