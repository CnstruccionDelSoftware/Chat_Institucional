import mongoose, {Schema,Document, Model} from 'mongoose';
import {ICourse} from './Course';
import {IStudent} from './Student';

export interface ICourseStudent extends Document {
    _id: string;
    id_student: ICourse['_id'];
    id_course: IStudent['_id'];
}

const coursestudentSchema: Schema = new Schema({
    id_student: {
        type:mongoose.Schema.Types.ObjectId,
        require:'Id Student is required!',
        ref: "Student"
    },
    id_course: {
        type:mongoose.Schema.Types.ObjectId,
        require:'Id Course is required!',
        ref:"Course"
    }
},{
    timestamps: true,
})

export const CourseStudent: Model<ICourseStudent> = mongoose.model("CourseStudent",coursestudentSchema)