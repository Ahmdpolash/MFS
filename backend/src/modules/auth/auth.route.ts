import { Router } from "express";
import { authController } from "./auth.conroller";
import { auth } from "../../middleware/auth";
const router = Router();

router.post("/signup", authController.createUser);
router.get("/users", authController.getUser);
router.post("/signin", authController.loginUser);
router.post("/signout", authController.signout);
router.get("/me", authController.getMe);

export const authRoute = router;
