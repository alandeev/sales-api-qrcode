import CreateRestaurantController  from "../controllers/create-restaurant";
import { Router } from "express";
import isAuthenticated from "@shared/middleware/is-authenticated-user";
import ENVS from "@config/envs";
import CreateEmployeeController from "../controllers/create-employee";
import AuthEmployeeController from "../controllers/auth-employee";
import CreateProductController from "../controllers/create-product";
import ListProductsController from "../controllers/list-products";
import CreateComandaController from "../controllers/create-comanda";
import CreateCategoryController from "../controllers/create-category";
import ListCategoryController from "../controllers/list-categories";
 
const RestaurantRoutes = Router()

const createRestaurantController = new CreateRestaurantController()
const createEmployeeController = new CreateEmployeeController()
const authEmployeeController = new AuthEmployeeController()
const createProductController = new CreateProductController()
const listProductsController = new ListProductsController()
const createComandaController = new CreateComandaController()
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()

// Clients
const isClientAuthenticated = isAuthenticated(ENVS.CLIENT_SECRET_KEY);
RestaurantRoutes.post('/', isClientAuthenticated, createRestaurantController.execute)
RestaurantRoutes.post('/employee', isClientAuthenticated, createEmployeeController.execute)
RestaurantRoutes.post('/products', isClientAuthenticated, createProductController.execute)
RestaurantRoutes.get('/products', isClientAuthenticated, listProductsController.execute)
RestaurantRoutes.post('/categories', isClientAuthenticated, createCategoryController.execute)
RestaurantRoutes.get('/categories', isClientAuthenticated, listCategoryController.execute)

// Employees
const isEmployeeAuthenticated = isAuthenticated(ENVS.EMPLOYEE_SECRET_KEY);

RestaurantRoutes.post('/comandas', isEmployeeAuthenticated, createComandaController.execute)
RestaurantRoutes.post('/employee/auth', authEmployeeController.execute)

export default RestaurantRoutes