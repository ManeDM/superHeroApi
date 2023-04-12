import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit {

  heroes: Hero[] = [];
  filterHero = '';
 

  constructor(private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
      console.log(this.heroes);
    });
    
  }

}