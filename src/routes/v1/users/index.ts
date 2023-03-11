import { User } from "@prisma/client";
import express, { json } from "express";
import usersControllers from "../../../controllers/users-controllers";

const router = express.Router();

router.get('/users/me', async (req, res) => {
    try {
        const id = (req as any).authUserId;

        const user = await usersControllers.find(id);

        return res.json({
            user: user
        });
    } 
    catch (error) {
        return res.status(500).json({
            message: 'Não foi possível obter os dados do usuário.'
        })   
    }
})

export default router;
