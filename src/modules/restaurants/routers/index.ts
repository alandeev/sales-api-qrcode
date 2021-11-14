import CreateRestaurantController  from "../controllers/create-restaurant";
import { Router } from "express";
import isAuthenticated from "@shared/middleware/is-authenticated-user";
import ENVS from "@config/envs";
 
const RestaurantRoutes = Router()

const createRestaurantController = new CreateRestaurantController()

const isClientAuthenticated = isAuthenticated(ENVS.CLIENT_SECRET_KEY);

RestaurantRoutes.post('/', isClientAuthenticated, createRestaurantController.execute)

export default RestaurantRoutes