import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from '../../node_modules/rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]>
  {
     this.messageService.add('HeroService: fetched  heroes');
     return of(HEROES);
  }
}
