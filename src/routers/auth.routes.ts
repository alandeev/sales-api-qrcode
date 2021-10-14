import { Router } from 'express'
import RegisterController from '../controllers/auth/register'

const routes = Router()

routes.post('/register', RegisterController)

export default routes