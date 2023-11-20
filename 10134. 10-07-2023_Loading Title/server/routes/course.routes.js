import { Router } from "express";
const courseRoutes = Router();
import {
    createCourse,
    createLecture,
    deleteLecture,
    getAllCourses,
    getLecturesByCourseId,
    removeCourse,
    updateCourse,
    updateLecture,
    viewLecture,
} from "../controllers/course.controller.js";
import { isLoggedIn, authorizedRoles } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

courseRoutes.get("/", getAllCourses);
courseRoutes.get("/:id", isLoggedIn, getLecturesByCourseId);
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

courseRoutes.post(
    "/:id/add-lecture",
    isLoggedIn,
    authorizedRoles("ADMIN"),
    upload.single("lecture"),
    createLecture
);

courseRoutes.get("/:courseid/view-lecture/:lectureid", isLoggedIn, viewLecture);

courseRoutes.put(
    "/:courseid/update-lecture/:lectureid",
    isLoggedIn,
    authorizedRoles("ADMIN"),
    upload.single("lecture"),
    updateLecture
);

courseRoutes.delete(
    "/:id/delete-lecture",
    isLoggedIn,
    authorizedRoles("ADMIN"),
    deleteLecture
);

export default courseRoutes;
