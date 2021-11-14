import ClientRoutes from '@modules/clients/routers'
import UserRoutes from '@modules/users/routers'
import { Request, Response, Router } from 'express'

const routes = Router()

routes.use('/users', UserRoutes)
routes.use('/clients', ClientRoutes)

export default routes;