import { Router } from "express";
import { authController } from "./auth.conroller";

const router = Router();

router.post("/signup", authController.createUser);
router.get("/users", authController.getUser);
router.post("/signin", authController.loginUser);
router.post("/signout", authController.signout);

export const authRoute = router;
