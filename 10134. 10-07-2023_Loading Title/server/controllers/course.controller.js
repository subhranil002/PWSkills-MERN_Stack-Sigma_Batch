import Course from "../models/course.model.js";
import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";

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
    try {
        const { title, description, category, createdBy } = req.body;
        const userId = req.user.id;
        const user = await User.findById(userId);

        if (!title || !description || !category || !createdBy) {
            return next(new AppError("All fields are required", 400));
        }

        const existSameTitle = Course.find({ title });

        if (existSameTitle) {
            return next(
                new AppError(
                    "Course with same title already exists, please use different title",
                    400
                )
            );
        }

        const course = await Course.create({
            title,
            description,
            category,
            createdBy,
            thumbnail: {
                public_id: user.email,
                secure_url:
                    "https://res.cloudinary.com/dznnpy9yz/image/upload/v1700299101/lms/vg3ifzso1gxzdoifir45.jpg",
            },
        });

        if (!course) {
            return next(
                new AppError(
                    "Course could not be created, please try again",
                    400
                )
            );
        }

        if (req.file) {
            try {
                const result = await cloudinary.v2.uploader.upload(
                    req.file.path,
                    {
                        folder: "lms",
                        crop: "fill",
                    }
                );

                if (result) {
                    course.thumbnail.public_id = result.public_id;
                    course.thumbnail.secure_url = result.secure_url;

                    fs.rm(`../uploads/${req.file.filename}`);
                }
            } catch (error) {
                return next(
                    new AppError(
                        error.message || "File not uploaded, please try again",
                        500
                    )
                );
            }
        }

        await course.save();

        res.status(200).json({
            success: true,
            messsage: "Course created successfully",
            course,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, description, category, createdBy } = req.body;

        const course = await Course.findById(id);

        if (!course) {
            return next(
                new AppError("Course with given id doesnot exist", 400)
            );
        }

        if (title) {
            course.title = title;
        }

        if (description) {
            course.description = description;
        }

        if (category) {
            course.category = category;
        }

        if (createdBy) {
            course.createdBy = createdBy;
        }

        if (req.file) {
            try {
                const result = await cloudinary.v2.uploader.upload(
                    req.file.path,
                    {
                        folder: "lms",
                    }
                );

                if (result) {
                    course.thumbnail.public_id = result.public_id;
                    course.thumbnail.secure_url = result.secure_url;

                    fs.rm(`../uploads/${req.file.filename}`);
                }
            } catch (error) {
                return next(
                    new AppError(
                        error.message || "File not uploaded, please try again",
                        500
                    )
                );
            }
        }

        await course.save();

        res.status(200).json({
            success: true,
            messsage: "Course updated successfully",
            course,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const removeCourse = async (req, res, next) => {
    try {
        const id = req.params.id;

        const course = await Course.findById(id);

        if (!course) {
            return next(
                new AppError("Course with given id doesnot exist", 400)
            );
        }

        await course.deleteOne({
            _id: id,
        });
        await cloudinary.v2.uploader.destroy(course.thumbnail.public_id);

        res.status(200).json({
            success: true,
            messsage: "Course deleted successfully",
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

export {
    getAllCourses,
    getLectureByCourseId,
    createCourse,
    updateCourse,
    removeCourse,
};
