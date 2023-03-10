import { User } from "@prisma/client";
import express from 'express';
import authControllers from "../../../controllers/auth-controllers";

const router = express.Router();

router.post('/sign-in', async (req, res) => {
    try {
        const {email, password} = req.body;

        try {
            const user = await authControllers.signIn(email, password);

            if(!user){
                return res.status(401).json({
                    message: 'Usuário ou senha inválidos.'
                }); 
            }

            return res.json(user);
        } 
        catch (error) {
            return res.status(500).json({
                message: 'Não foi possível efetuar o login, tente novamente mais tarde.'
            }) 
        }
    } 
    catch (error) {
        return res.status(401).json({
            message: 'Não foi possível realizar o login'
        })
    }
});

router.post('/sign-up', async (req, res) => {
    let user: User = req.body;

    try {
        user = await authControllers.signUp(user);

        return res.status(201).json(user);
    } 
    catch (error) {
        return res.status(500).json({
            message: 'Não foi possível criar o usuário.'
        })   
    }
});

export default router;