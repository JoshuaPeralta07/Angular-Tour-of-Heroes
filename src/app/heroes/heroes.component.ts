import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero = Hero;
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  heroes: Hero[];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private heroService: HeroService) { }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}