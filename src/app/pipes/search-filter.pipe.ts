import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(heroes: Hero[], heroSearch: string): any[] {
    if (!heroes) return [];
    if (!heroSearch) return heroes;
    heroSearch = heroSearch.toLowerCase();
    return heroes.filter(item => {
        return item.name.toLowerCase().includes(heroSearch);
    });
}
}

export { Pipe };
