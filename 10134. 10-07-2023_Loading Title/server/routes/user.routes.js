import { Router } from "express";
const userRoutes = Router();
import {
    register,
    login,
    logout,
    getProfile,
} from "../controllers/user.controller.js";
import isLoggedIn from "../middlewares/auth.middleware.js";

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/logout", logout);
userRoutes.get("/me", isLoggedIn, getProfile);

export default userRoutes;
