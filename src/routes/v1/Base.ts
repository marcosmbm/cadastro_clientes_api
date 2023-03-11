import express from "express";
import UserRouter from './users';
import AuthRouter from './auth';
import { jwtMiddleware } from "../../middlewares/jwt-middleware";

const router = express.Router();

router.get('/', (_, res) => {
    res.json({
        success: true,
        message: 'connected'
    });
});

router.use(AuthRouter);
router.use(jwtMiddleware);
router.use(UserRouter);

export default router;
