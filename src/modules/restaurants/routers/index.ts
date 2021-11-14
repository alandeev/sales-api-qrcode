import CreateRestaurantController  from "../controllers/create-restaurant";
import { Router } from "express";
import isAuthenticated from "@shared/middleware/is-authenticated-user";
import ENVS from "@config/envs";
import CreateEmployeeController from "../controllers/create-employee";
 
const RestaurantRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const createEmployeeController = new CreateEmployeeController()

const isClientAuthenticated = isAuthenticated(ENVS.CLIENT_SECRET_KEY);

RestaurantRoutes.post('/', isClientAuthenticated, createRestaurantController.execute)
RestaurantRoutes.post('/employee', isClientAuthenticated, createEmployeeController.execute)

export default RestaurantRoutes