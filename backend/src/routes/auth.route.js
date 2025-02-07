import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", protectRoute, logout);
export default router;
