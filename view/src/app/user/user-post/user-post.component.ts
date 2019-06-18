import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
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
  }

}
