import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../service.service';
import { Teacher } from 'src/app/teacher/teacher-schema';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course-post',
  templateUrl: './course-post.component.html',
  styleUrls: ['./course-post.component.css']
})
export class CoursePostComponent implements OnInit {
  dataSource: Teacher[];
  course:FormGroup;
  name = '';
  city = '';
  peiord = 0;
  teacher : Teacher[];
  result = false;
  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTeacher();
    this.course = this.formBuilder.group({
      name: [null, Validators.required],
      city: [null, Validators.required],
      period: [null, Validators.required],
      teacher:[[]],
    });
  }

  postCourse(form: NgForm){
    this.result = true;
    this.service.postCourse(form).subscribe(res => {
      this.result = false;
      this.router.navigate(['/course']);
    }, (err) =>{
      console.log(err);
      this.result = false;
    });
  }

  getTeacher(){
    this.service.getAllTeachers().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.teacher = this.dataSource.map((item:Teacher) =>{
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastname = item.lastname;
        teacher.phd = item.phd;
        return teacher;
      });
    },err=>{
      console.log(err);
      this.result = false;
    });
  }

}
