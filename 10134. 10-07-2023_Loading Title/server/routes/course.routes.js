import { Router } from "express";
const courseRoutes = Router();
import {
    createCourse,
    getAllCourses,
    getLectureByCourseId,
    removeCourse,
    updateCourse,
} from "../controllers/course.controller.js";
import { isLoggedIn, authorizedRoles } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

courseRoutes.get("/", getAllCourses);
courseRoutes.get("/:id", isLoggedIn, getLectureByCourseId);
courseRoutes.post(
    "/create-course",
    isLoggedIn,
    authorizedRoles("ADMIN"),
    upload.single("thumbnail"),
    createCourse
);
courseRoutes.put(
    "/update-course/:id",
    isLoggedIn,
    authorizedRoles("ADMIN"),
    upload.single("thumbnail"),
    updateCourse
);
courseRoutes.delete(
    "/remove-course/:id",
    isLoggedIn,
    authorizedRoles("ADMIN"),
    removeCourse
);

export default courseRoutes;
