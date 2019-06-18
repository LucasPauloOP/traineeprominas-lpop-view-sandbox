import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Service} from '../service.service';
import {User} from './user-schema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'profile', 'action'];
  dataSource: User[];
  isLoadingResults = true;

  constructor(private api: Service) { }

  ngOnInit() {
    this.api.getAllUsers()
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
