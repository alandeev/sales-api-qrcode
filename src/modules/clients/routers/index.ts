import { Router } from 'express'
import ENVS from '@config/envs'
import isAuthenticated from '@shared/middleware/is-authenticated-user'
import AuthClientController from '../controllers/auth-client'
import CreateClientController from '../controllers/create-client'

const ClientRoutes = Router()

const authClientController = new AuthClientController()
const createClientController = new CreateClientController()

const isUserAuthenticated = isAuthenticated(ENVS.USER_SECRET_KEY)

ClientRoutes.post(
  '/create', 
  isUserAuthenticated, 
  createClientController.execute
)
ClientRoutes.post('/auth', authClientController.execute)

export default ClientRoutes