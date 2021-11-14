import CreateRestaurantController  from "../controllers/create-restaurant";
import { Router } from "express";
import isAuthenticated from "@shared/middleware/is-authenticated-user";
import ENVS from "@config/envs";
import CreateEmployeeController from "../controllers/create-employee";
import AuthEmployeeController from "../controllers/auth-employee";
 
const RestaurantRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const createEmployeeController = new CreateEmployeeController()
const authEmployeeController = new AuthEmployeeController() 

const isClientAuthenticated = isAuthenticated(ENVS.CLIENT_SECRET_KEY);

// auth routers
RestaurantRoutes.post('/', isClientAuthenticated, createRestaurantController.execute)
RestaurantRoutes.post('/employee', isClientAuthenticated, createEmployeeController.execute)

// no auth routers
RestaurantRoutes.post('/employee/auth', authEmployeeController.execute)

export default RestaurantRoutes