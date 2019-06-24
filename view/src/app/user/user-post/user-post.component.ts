import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators,ReactiveFormsModule } from '@angular/forms';
import {Service} from '../../service.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})

export class UserPostComponent implements OnInit {
  user: FormGroup;
  name = '';
  lastname = '';
  profile = '';
  result = false;
  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      profile: [null, Validators.required]
    });
  }

  postUser(form: NgForm){
    this.result = true;
    this.service.postUser(form).subscribe(res => {
      this.result = false;
      this.router.navigate(['/user']);
    }, (err) =>{
      console.log(err);
      this.result = false;
    });
  }
}
