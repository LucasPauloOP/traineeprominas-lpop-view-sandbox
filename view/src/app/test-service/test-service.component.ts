import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from '../hero';
import {heroes} from '../test/mock-heroes';
import {MessageService} from '../test-messages-service/test-messages-service.component';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable <Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of (heroes.find(hero => hero.id === id));
  }
}


