import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Service} from '../../service.service'
import {Teacher} from '../teacher-schema'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'profile', 'action'];
  dataSource: MatTableDataSource<Teacher>;
  isLoadingResults = true;

  constructor(private api: Service) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.api.getAllTeachers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Teacher>(res);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {

        return this.nestedFilterCheck(currentTerm, data, key);

      };

      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  nestedFilterCheck(search, data, key) {
    if (typeof data[key]=== 'object') {
      for (const k in data[key][0]) {
        if(k == 'name'){
          console.log(k);
          if (data[key][k] !== null) {
            search = this.nestedFilterCheck(search, data[key][0], k);
          }
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

}
