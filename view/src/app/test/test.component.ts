import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  hero = 'windstorm';
  constructor() {
  }
  ngOnInit() {
  }

}


