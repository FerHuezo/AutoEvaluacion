/*
    Fields:
        title,
        description,
        completed
*/

import { Schema, model } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true, 
            minLength: 4,
            trim: true
        },
        description: {
            type: String,
            required: true, 
            minLength: 4,
            trim: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },{
        timestamps: true,
        strict: false
    }
)

export default model("Tasks", taskSchema)