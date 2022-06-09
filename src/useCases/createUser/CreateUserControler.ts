import {Request, Response} from "express"
import {CreateUserCase} from "./CreateUseCase"

class CreateUserController{

    async handle (request: Request, response: Response){
        
        const {username, name, password}  = request.body;

        const createUserCase = new CreateUserCase();
         
        const user = await createUserCase.execute({
            name,
            username,
            password
        });
        
        return response.json(user);
    }   
}

export {CreateUserController}