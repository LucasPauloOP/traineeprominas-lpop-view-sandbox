import { Component, OnInit, ViewChild } from '@angular/core';
import {Service} from '../../service.service';
import {Student} from '../studen-schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastname', 'age', 'course', 'action'];
  dataSource: MatTableDataSource<Student>;
  isLoadingResults = true;
  constructor(private api:Service) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.api.getAllStudent()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Student>(res);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
   }

  }

