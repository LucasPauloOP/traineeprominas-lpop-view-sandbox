import { Component, OnInit, ViewChild } from '@angular/core';
import {Service} from '../../service.service';
import {Course} from  '../course-Schema';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'city', 'period', 'teacher','action'];
  dataSource: MatTableDataSource<Course>;
  isLoadingResults = true;

  constructor(private api: Service) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.api.getAllCourse()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Course>(res);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
