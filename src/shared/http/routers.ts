import UserRoutes from '@modules/users/routers'
import { Request, Response, Router } from 'express'

const routes = Router()

routes.use('/users', UserRoutes)

routes.get('*', async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Teste"
  })
})

export default routes;