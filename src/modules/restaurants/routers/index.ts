import CreateRestaurantController  from "../controllers/create-restaurant";
import { Router } from "express";
import isAuthenticated from "@shared/middleware/is-authenticated-user";
import ENVS from "@config/envs";
import CreateEmployeeController from "../controllers/create-employee";
import AuthEmployeeController from "../controllers/auth-employee";
import CreateProductController from "../controllers/create-product";
import ListProductsController from "../controllers/list-products";
 
const RestaurantRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const createEmployeeController = new CreateEmployeeController()
const authEmployeeController = new AuthEmployeeController() 
const createProductController = new CreateProductController()
const listProductsController = new ListProductsController()

const isClientAuthenticated = isAuthenticated(ENVS.CLIENT_SECRET_KEY);

// auth routers
RestaurantRoutes.post('/', isClientAuthenticated, createRestaurantController.execute)

RestaurantRoutes.post('/employee', isClientAuthenticated, createEmployeeController.execute)

RestaurantRoutes.post('/products', isClientAuthenticated, createProductController.execute)
RestaurantRoutes.get('/products', isClientAuthenticated, listProductsController.execute)

// no auth routers
RestaurantRoutes.post('/employee/auth', authEmployeeController.execute)

export default RestaurantRoutes