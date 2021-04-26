import {ICourse} from "../../domain/Model/Course";
import {ICourseStudent} from "../../domain/Model/CourseStudent";

import IReadable from "./IReadable";
import IWritable from "./IWritable";

interface DaoCourse extends IReadable<ICourse,string>, IWritable<ICourse>{
    findBySubject(subject:string) : Promise<ICourse|null>;
}

export default DaoCourse;