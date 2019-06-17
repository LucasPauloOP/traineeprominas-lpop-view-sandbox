import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from '../hero';
import {heroes} from '../test/mock-heroes';
import {MessageService} from '../test-messages-service';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes():Observable<Hero[]>{
    //ALL:send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
  }
}


