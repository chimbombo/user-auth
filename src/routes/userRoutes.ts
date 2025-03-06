import { Router } from "express";
import { userController } from "@controllers/userController";

export const router = Router();
const { logInUser } = userController;

router.post("/login", logInUser);