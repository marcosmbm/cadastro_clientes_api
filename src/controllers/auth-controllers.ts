import {PrismaClient, User} from '@prisma/client';
import bcrypt from 'bcrypt';
import usersControllers from './users-controllers';
import * as jwt from  "jsonwebtoken";


class AuthController{
    async signUp(user: User){
        return await usersControllers.saveUser(user);
    }

    async signIn(email: string, password: string){
        const user = await usersControllers.getUserByEmail(email);    

        if(!user){
            return undefined
        }

        if(bcrypt.compareSync(password, user.password)){
            const token = jwt.sign({
                id: user.id
            }, process.env.JWT_SECRET || 'secret', {expiresIn: '1h'})

            return token
        }
        else{
            return undefined
        }
    }
}

export default new AuthController();