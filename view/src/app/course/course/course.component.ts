import { Component, OnInit } from '@angular/core';
import {Service} from '../../service.service'
import {Course} from  '../course-Schema'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'city', 'period', 'teacher'];
  dataSource: Course[];
  isLoadingResults = true;

  constructor(private api: Service) { }

  ngOnInit() {
    this.api.getAllCourse()
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
