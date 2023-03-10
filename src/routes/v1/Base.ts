import express from "express";
import UserRouter from './users';
import AuthRouter from './auth';

const router = express.Router();

router.get('/', (_, res) => {
    res.json({
        success: true,
        message: 'connected'
    });
});

router.use(UserRouter);
router.use(AuthRouter);

export default router;
