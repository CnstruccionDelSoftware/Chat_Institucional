import mongoose, {Schema,Document,Model} from 'mongoose';
import {IStudent} from './Student';
import {ICourse} from './Course';

export interface IMessage extends Document {
    _id: string;
    id_student: IStudent['_id'];
    id_course: ICourse['_id']
    content: string;
    username:string;
}

const messageSchema: Schema = new Schema({
    id_student: {
        type:mongoose.Schema.Types.ObjectId,
        require:'Id Student is required!',
        ref: "Student",
    }, 
    id_course: {
        type:mongoose.Schema.Types.ObjectId,
        require:'Id Course is required!',
        ref: "Course"
    },
    content: {
        type:String,
        require:'content is required!'
    }
},{
    timestamps: true,
})

export const Message: Model<IMessage> = mongoose.model("Message",messageSchema)