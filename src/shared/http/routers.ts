import ClientRoutes from '@modules/clients/routers'
import RestaurantRoutes from '@modules/restaurants/routers'
import UserRoutes from '@modules/users/routers'
import { Router } from 'express'

const routes = Router()

routes.use('/users', UserRoutes)
routes.use('/clients', ClientRoutes)
routes.use('/restaurants', RestaurantRoutes)

export default routes;