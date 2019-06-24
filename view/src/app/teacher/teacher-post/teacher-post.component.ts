import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Service} from '../../service.service';

@Component({
  selector: 'app-teacher-post',
  templateUrl: './teacher-post.component.html',
  styleUrls: ['./teacher-post.component.css']
})
export class TeacherPostComponent implements OnInit {
  teacher: FormGroup;
  name = '';
  lastname = '';
  phd = false;
  result = false;
  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.teacher = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      phd: [null, Validators.required]
    });
  }

  postTeacher(form: NgForm){
    this.result = true;
    this.service.postTeacher(form).subscribe(res => {
      this.result = false;
      this.router.navigate(['/teacher']);
    }, (err) =>{
      console.log(err);
      this.result = false;
    });
  }

}
