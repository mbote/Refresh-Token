
// import {has} from "bcryptjs"
import {client} from '../../prisma/client';

interface IUserRequest{
    name: string,
    password: string,
    username: string
}

class CreateUserCase{
    
    async execute({name, username, password}: IUserRequest){
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username
            }
        })
        if(userAlreadyExists){
            throw new Error("user already exists!");
        }
       // const passwordHash = await hash(password,8);
        const user = await client.user.create({
            data:{
                name,
                username,
                password
                //password: passwordHash,
            }
        })
        return user;
    }
}
export{CreateUserCase}