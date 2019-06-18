import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';

import {HeroService} from '../test-service/test-service.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}


