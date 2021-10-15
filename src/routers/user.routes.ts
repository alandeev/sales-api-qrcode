import { Router } from 'express'
import UserController from '@controllers/users'
import isAuthenticated from 'src/middlewares/is-authenticated'

const routes = Router()

routes.use(isAuthenticated)

routes.get('/me', UserController.getUser)

export default routes