import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Hero } from '../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

private apiUrl = 'https://www.superheroapi.com/api.php/191724957000276';

constructor(private http: HttpClient) { }

getHeroes(): Observable<Hero[]> {
  const requests = [];
  for (let i = 1; i <= 200; i++) {
      requests.push(this.http.get<Hero>(`${this.apiUrl}/${i}`));
  }
  return forkJoin(requests);
  }
}