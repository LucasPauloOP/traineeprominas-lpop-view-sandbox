import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';

import {heroes} from './mock-heroes';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class HeroesComponent implements OnInit {
  HEROES = heroes;
  selectedHero: Hero;
  constructor() {}
  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


