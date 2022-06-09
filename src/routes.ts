import {request, Router} from "express";
import {CreateUserController} from "./useCases/createUser/CreateUserControler"
import {AuthenticateUserController} from "./useCases/authenticateUser/AuthenticateUserController"
import {ensureAuthenticated} from "./middlewares/ensureAuthenticated"
const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
 
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.get("/cursos", ensureAuthenticated, (request, response) =>{
    return response.json([
       {id:1, name:"Node.js"},
       {id:2, name:"React.js"}
    ]);
});

export {router}