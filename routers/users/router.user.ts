import { Router } from "express";
import  * as ctrlUser  from "../../controllers/users/controllers.user";
const routerUser = Router()


routerUser.post('/signup', ctrlUser.signup)
routerUser.post('/signin', ctrlUser.signin)

export default routerUser