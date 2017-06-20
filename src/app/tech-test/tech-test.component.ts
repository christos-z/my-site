import { Component, OnInit } from '@angular/core';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
  selector: 'app-tech-test',
  providers: [HeroService], 
  templateUrl: './tech-test.component.html',
  styleUrls: ['./scss/bootstrap.scss']
})
export class TechTestComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
    ) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
