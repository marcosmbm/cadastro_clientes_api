import { User } from "@prisma/client";
import express from "express";
import usersControllers from "../../../controllers/users-controllers";

const router = express.Router();

router.post('/users', async (req, res) => {
    let user: User = req.body;

    try {
        user = await usersControllers.saveUser(user);

        return res.status(201).json(user);
    } 
    catch (error) {
        return res.status(500).json({
            message: 'Não foi possível criar o usuário.'
        })   
    }
});

export default router;
