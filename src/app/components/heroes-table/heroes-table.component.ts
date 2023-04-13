import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Hero } from 'src/app/interfaces/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { setMessage } from '../../state/actions/heroes.actions';
import { getMessage } from '../../state/selectors/heroes.selectors';




@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit  {

  message$?: Observable<string>;
  animatedMessages: string[] = [];
  heroes: Hero[] = [];
  powerstats: any[] = [];
  selectedStat: string = '';
  filterHero = '';
  filteredheroes: Hero[] = [];
  selectedGender: string = '';
  selectedRace: string = '';
  selectedHeight: string = '';
  selectedWeight: string = '';
  selectedEyeColor: string = '';
  selectedHairColor: string = '';

  constructor(
    private heroesService: HeroesService,
    private store: Store<any>
     ) {
    this.heroesService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
      console.log(this.heroes);
      this.filteredheroes = this.heroes; 
    });
  }
  
  ngOnInit(): void {
    this.store.dispatch(setMessage({ message: 'Bienvenido, Acá hayaras información sobre los mas asombrosos Héroes , Villanos y Anti-Héroes de la industria del cómic'}));
    this.message$ = this.store.select(getMessage);
  }

  
  powerStats() {
    const power = new Set(this.heroes.map(hero => hero.powerstats));
    this.powerstats = Array.from(power);
  }

  filterByStats() {
    if (this.selectedStat && this.selectedStat.trim() !== "") {
      const threshold = 0; 
      const filteredHeroes = this.heroes.filter(hero => Number(hero.powerstats[this.selectedStat]) >= threshold);
      const sortedHeroes = filteredHeroes.sort((hero1, hero2) => Number(hero2.powerstats[this.selectedStat]) - Number(hero1.powerstats[this.selectedStat]));
      this.filteredheroes = sortedHeroes;
    } else {
      this.filteredheroes = this.heroes;
    }
  }

  filterByGender() {
  if (this.selectedGender) {
    this.filteredheroes = this.heroes.filter(hero => hero.appearance.gender.toLowerCase() === this.selectedGender);
  } else {
    this.filteredheroes = this.heroes;
  }
}

getUniqueRaces() {
  const races = new Set<string>();
  this.heroes.forEach(hero => {
    races.add(hero.appearance.race);
  });
  return Array.from(races);
}

filterByRace() {
  if (this.selectedRace) {
    this.filteredheroes = this.heroes.filter(hero => hero.appearance.race === this.selectedRace);
  } else {
    this.filteredheroes = this.heroes;
  }
}

getUniqueHeight() {
  const height = new Set<string>();
  this.heroes.forEach(hero => {
    height.add(hero.appearance.height[0]);
  });
  return Array.from(height);
}
filterByHeight() {
  if (this.selectedHeight) {
    this.filteredheroes = this.heroes.filter(hero => hero.appearance.height[0] === this.selectedHeight);
  } else {
    this.filteredheroes = this.heroes;
  }

}

getUniqueWeight() {
  const weight = new Set<string>();
  this.heroes.forEach(hero => {
    weight.add(hero.appearance.weight[0]);
  });
  return Array.from(weight);
}

filterByWeight() {
  if (this.selectedWeight) {
    this.filteredheroes = this.heroes.filter(hero => hero.appearance.weight[0] === this.selectedWeight);
  } else {
    this.filteredheroes = this.heroes;
  }

}
getUniqueEyeColor() {
  const eyeColor = new Set<string>();
  this.heroes.forEach(hero => {
    eyeColor.add(hero.appearance["eye-color"]);
  });
  return Array.from(eyeColor);

}
filterByEyeColor() {
  if (this.selectedEyeColor) {
    this.filteredheroes = this.heroes.filter(hero => hero.appearance["eye-color"] === this.selectedEyeColor);
  } else {
    this.filteredheroes = this.heroes;
  }
}

getUniqueHairColor() {
  const hairColor = new Set<string>();
  this.heroes.forEach(hero => {
    hairColor.add(hero.appearance["hair-color"]);
  });
  return Array.from(hairColor);

}

filterByHairColor() {
  if (this.selectedHairColor) {
    this.filteredheroes = this.heroes.filter(hero => hero.appearance["hair-color"] === this.selectedHairColor);
  } else {
    this.filteredheroes = this.heroes;
  }}

}