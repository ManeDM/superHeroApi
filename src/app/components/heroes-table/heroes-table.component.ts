import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent  {

  heroes: Hero[] = [];
  powerstats: any[] = [];
  selectedStat: string = '';
  filterHero = '';
  filteredheroes: Hero[] = [];

  constructor(private heroesService: HeroesService ) {
    this.heroesService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
      console.log(this.heroes);
      this.filteredheroes = this.heroes; // Actualiza los héroes filtrados
    });
  }
  

  powerStats() {
    const power = new Set(this.heroes.map(hero => hero.powerstats));
    this.powerstats = Array.from(power);
  }

  filterByStats() {
    if (this.selectedStat && this.selectedStat.trim() !== "") {
      const threshold = 0; // Valor umbral para la estadística seleccionada
      const filteredHeroes = this.heroes.filter(hero => Number(hero.powerstats[this.selectedStat]) >= threshold);
      const sortedHeroes = filteredHeroes.sort((hero1, hero2) => Number(hero2.powerstats[this.selectedStat]) - Number(hero1.powerstats[this.selectedStat]));
      this.filteredheroes = sortedHeroes;
    } else {
      this.filteredheroes = this.heroes;
    }
  }
}