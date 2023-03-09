import {PrismaClient, User} from '@prisma/client';
import bcrypt from 'bcrypt';

class UsersController{
    async saveUser(user: User){
        const prisma = new PrismaClient();

        const salt = Number(process.env.BCRYPT_SALT_ROUNDS);
        
        const hash = bcrypt.hashSync(user.password, salt);

        user.password = hash;

        try {
            return await prisma.user.create({
                data: user
            })
        } 
        catch (error) {
            throw error;
        }
        finally{
            await prisma.$disconnect();
        }
    }
}

export default new UsersController();