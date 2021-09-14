import { Component, OnInit } from '@angular/core';
import { Hero } from '../app.component';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;

  constructor() { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}