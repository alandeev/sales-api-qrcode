import { Router } from 'express'
import AuthUserControler from '../controllers/auth-user'
import CreateUserControler from '../controllers/create-user'

const createUserControler = new CreateUserControler()
const authUserController = new AuthUserControler()

const UserRoutes = Router()

UserRoutes.post('/', createUserControler.execute)
UserRoutes.post('/auth', authUserController.execute)

export default UserRoutes;