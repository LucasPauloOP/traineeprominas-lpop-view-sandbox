import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Service} from '../../service.service'
import {Teacher} from '../teacher-schema'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'profile', 'action'];
  dataSource: Teacher[];
  isLoadingResults = true;

  constructor(private api: Service) { }

  ngOnInit() {
    this.api.getAllTeachers()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
