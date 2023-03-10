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

    async getUserByEmail(email: string){
        const prisma = new PrismaClient();

        try {
            return await prisma.user.findUnique({
                where: {
                    email: email
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    password: true
                },
            });
        } 
        catch (error) {
            throw error
        }
        finally{
            prisma.$disconnect();
        }

    }

    async find(id: number){
        const prisma = new PrismaClient();

        try {
            return await prisma.user.findUnique({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    password: true
                },
            });
        } 
        catch (error) {
            throw error
        }
        finally{
            prisma.$disconnect();
        }

    }
}

export default new UsersController();