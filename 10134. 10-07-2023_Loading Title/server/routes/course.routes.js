import { Router } from "express";
const courseRoutes = Router();
import {
    createCourse,
    getAllCourses,
    getLectureByCourseId,
    removeCourse,
    updateCourse,
} from "../controllers/course.controller.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

courseRoutes.get("/", getAllCourses);
courseRoutes.get("/:id", isLoggedIn, getLectureByCourseId);
courseRoutes.post(
    "/create-course",
    isLoggedIn,
    upload.single("thumbnail"),
    createCourse
);
courseRoutes.put(
    "/update-course/:id",
    isLoggedIn,
    upload.single("thumbnail"),
    updateCourse
);
courseRoutes.delete("/remove-course/:id", isLoggedIn, removeCourse);

export default courseRoutes;
