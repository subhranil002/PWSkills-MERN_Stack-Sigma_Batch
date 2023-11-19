import { model, Schema } from "mongoose";

const courseSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            maxLength: [59, "Title should be less than 60 characters"],
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minLength: [50, "Description should be greater than 50 characters"],
            maxLength: [200, "Description should be less than 200 characters"],
            trim: true,
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        thumbnail: {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            },
        },
        lectures: [
            {
                title: {
                    type: String,
                    required: true,
                    unique: true,
                },
                description: {
                    type: String,
                    required: true,
                },
                lecture: {
                    public_id: {
                        type: String,
                        required: true,
                    },
                    secure_url: {
                        type: String,
                        required: true,
                    },
                },
            },
        ],
        numbersOfLectures: {
            type: Number,
            default: 0,
        },
        createdBy: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Course = model("Course", courseSchema);

export default Course;
