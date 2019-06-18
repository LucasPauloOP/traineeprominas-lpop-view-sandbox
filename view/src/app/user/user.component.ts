import { Component, OnInit } from '@angular/core';
import {Service} from '../service.service';
import {User} from './user-schema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'profile', 'action'];
  dataSource: UserComponent[];
  isLoadingResults = true;
  constructor(private userService: Service) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.dataSource = res;
      console.log('entrou2', this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
