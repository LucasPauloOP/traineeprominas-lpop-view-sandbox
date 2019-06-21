import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../service.service';
import {Course} from '../../course/course-Schema';

@Component({
  selector: 'app-student-post',
  templateUrl: './student-post.component.html',
  styleUrls: ['./student-post.component.css']
})

export class StudentPostComponent implements OnInit {
  dataSource: Course[];
  student: FormGroup;
  name = '';
  city = '';
  peiord = 0;
  course : Course[];
  result = false;
  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getCourse();
    this.student = this.formBuilder.group({
      name : [null, Validators.required],
      lastname : [null, Validators.required],
      age : [null, Validators.required],
      course : null,
  });
}
  postStudent(form: NgForm)
  {
    this.result = true;
    this.service.postStudent(form)
    .subscribe(res=>{
      this.result=false;
      this.router.navigate(['/student']);
    },(err)=>{
      console.log(err);
      this.result = false;
    });
  }

  getCourse(){
    this.service.getAllCourse()
    .subscribe(res=>{
      this.dataSource = res;
      this.course = this.dataSource.map((item:Course)=>{
         const course = new Course();
         course.id = item.id;
         course.name=item.name;
         course.period=item.period;
         course.city=item.city;
         course.teacher=item.teacher;
         return course; 
      })
    },err => {
        console.log(err);
        this.result = false;
    });
  }


}
