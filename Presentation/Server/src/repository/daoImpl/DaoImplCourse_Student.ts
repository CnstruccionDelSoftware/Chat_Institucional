import mongoose from "mongoose";
import {ICourse, Course} from "../../domain/Model/Course";
import {CourseStudent, ICourseStudent} from "../../domain/Model/CourseStudent";
import DaoCourse_Student from "../dao/DaoCourse_Student";

class DaoImplCourse_Student implements DaoCourse_Student {
    
    async findAll(): Promise<ICourseStudent[]|null> {
        const courseStudents: Array<ICourseStudent>|null = await CourseStudent.find();

        return courseStudents;
    }

    async findById(id: string): Promise<ICourseStudent|null> {
        const courseStudent: ICourseStudent | null = await CourseStudent.findOne({_id:id});

        return courseStudent;
    }

    async findStudentCourses(id: string): Promise<ICourse[]|null> {
        
        let courseStudents: Array<ICourseStudent> = await CourseStudent.find({id_student:id});

        let arrayIds: string[] = [];
        courseStudents.forEach(element => {
            arrayIds.push(element.id_course)
        });

        let courses : ICourse[] = await Course.find().where('_id').in(arrayIds).exec();

        return courses;
    }

    async create(entity:ICourseStudent): Promise<boolean> {
        try {
            await entity.save();
            return true;
        } catch {
            return false;
        }
    }

    async modify(entity: ICourseStudent): Promise<ICourseStudent|null> {
        const courseStudent : ICourseStudent | null = await CourseStudent.findOneAndReplace({_id:entity._id})

        return courseStudent;
    }

}

export default DaoImplCourse_Student;