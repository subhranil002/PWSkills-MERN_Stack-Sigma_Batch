import Course from "../models/course.model.js";
import AppError from "../utils/error.util.js";

const getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find({}).select("-lectures");

        res.status(200).json({
            success: true,
            messsage: "All courses fetched successfully",
            courses,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const getLectureByCourseId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);

        if (!course) {
            return next(new AppError("Invalid course ID", 400));
        }

        res.status(200).json({
            success: true,
            messsage: "Course lectures fetched successfully",
            lectures: course.lectures,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const createCourse = async (req, res, next) => {

};

const updateCourse = async (req, res, next) => {

};

const removeCourse = async (req, res, next) => {

};

export { getAllCourses, getLectureByCourseId, createCourse, updateCourse, removeCourse };
