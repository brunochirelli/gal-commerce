import { Router } from "express";
import { userController } from "../controllers/userController";

const router = Router();

router.post(`/login`, userController.login);
router.get(`/:id`, userController.getUserData);
router.post(`/register`, userController.register);
router.post(`/recover`, userController.recoverPassword);

export { router as userRouter };
