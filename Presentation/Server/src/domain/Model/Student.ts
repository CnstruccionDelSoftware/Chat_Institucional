import mongoose, {Schema,Document,Model} from 'mongoose';

export interface IStudent extends Document {
    _id: string;
    name: string;
    lastname: string;
    password: string;
    username: string;
}

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        require:'Name is required!'
    }, 
    lastname: {
        type:String,
        require:'Last Name is required!'
    },
    password: {
        type:String,
        require:'Password is required!'
    },
    username: {
        type:String,
        require:'Username is required!'
    },
},{
    timestamps: true,
})

export const Student: Model<IStudent> = mongoose.model("Student",studentSchema) 