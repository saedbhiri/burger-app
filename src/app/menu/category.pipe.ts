import { Menu } from './../shared/menu.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(menu: Menu[], category: string): Menu[] {
    return menu.filter(item => item.category === category);
  }

}
