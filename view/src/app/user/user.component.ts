import { Component, OnInit } from '@angular/core';
import {Service} from '../service/service.components';
import {User} from './user-schema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: string[] = ['id', 'name', 'lastname', 'profile'];
  schema: UserComponent[];
  results = true;
  constructor(private userService: Service) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.schema = res;
      console.log('entrou2', this.schema);
      this.results = false;
    }, err => {
      console.log(err);
      this.results = false;
    });
  }

}
