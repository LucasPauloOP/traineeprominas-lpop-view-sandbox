import {Course} from '../course/course-Schema';

export class Student {
    id: number;
    name: string;
    lastname: string;
    age: number;
    course: Course;
}