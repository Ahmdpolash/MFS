import { Router } from "express";
import { authController } from "./auth.conroller";

const router = Router();

router.post("/signup", authController.createUser);
router.get("/", authController.getUser);
router.post("/signin", authController.loginUser);

export const authRoute = router;
