import { Router } from "express";
const userRoutes = Router();
import {
    register,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword,
    changePassword,
    updateUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

userRoutes.post("/register", upload.single("avatar"), register);
userRoutes.post("/login", login);
userRoutes.delete("/logout", logout);
userRoutes.get("/me", isLoggedIn, getProfile);
userRoutes.post("/forgot-password", forgotPassword);
userRoutes.post("/reset-password/:resetToken", resetPassword);
userRoutes.post("/change-password", isLoggedIn, changePassword);
userRoutes.put("/update", isLoggedIn, upload.single("avatar"), updateUser);

export default userRoutes;
