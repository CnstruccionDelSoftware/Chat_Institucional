import {ICourse, Course} from "../../domain/Model/Course";
import {ICourseStudent, CourseStudent} from "../../domain/Model/CourseStudent";
import DaoCourse from "../dao/DaoCourse";

class DaoImplCourse implements DaoCourse {
    
    //course_list:Array<ICourse> = [new Course('1', 'Matematica') , new Course('2' ,'Ingles')];

    async findAll(): Promise<ICourse[]|null>{
        const courses : Array<ICourse> | null = await Course.find();
        
        return courses;
    }

    async findById(id: string): Promise<ICourse|null> {
        const course : ICourse | null= await Course.findById(id);
        
        return course;
    }

    async create(entity:ICourse): Promise<boolean> {
        try {
            await entity.save();
            return true;
        } catch {
            return false;
        }
    }

    async modify(entity:ICourse): Promise<ICourse|null> {
        const course : ICourse | null = await Course.findOneAndReplace({_id:entity._id});

        return course;
    }

    async findBySubject(subject:string) : Promise<ICourse|null> {
        const course : ICourse | null = await Course.findOne({subject:subject});

        return course;
    }

}

export default DaoImplCourse;