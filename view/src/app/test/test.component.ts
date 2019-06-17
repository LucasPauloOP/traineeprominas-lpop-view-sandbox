import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';

import {HeroService} from '../test-service/test-service.component';

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


