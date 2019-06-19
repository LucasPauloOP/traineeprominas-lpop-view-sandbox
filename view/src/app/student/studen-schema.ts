import {Course} from '../course/course-Schema';

export class Student {
    id: number;
    name: string;
    lastName: string;
    age: number;
    course: Course[] = [];
}