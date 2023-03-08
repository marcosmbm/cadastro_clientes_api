import express from "express";
import UserRouter from './users';

const router = express.Router();

router.get('/', (_, res) => {
    res.json({
        success: true,
        message: 'connected'
    });
});

router.use(UserRouter);

export default router;
