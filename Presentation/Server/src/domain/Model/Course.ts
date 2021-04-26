import mongoose, {Model,Schema,Document} from 'mongoose';

export interface ICourse extends Document {
    _id: string;
    subject: string;
    
}

const courseSchema: Schema = new Schema({
    subject: {
        type:String,
        require:'Subject is required!'
    },
},{
    timestamps: true,
})

export const Course: Model<ICourse> = mongoose.model("Course",courseSchema)