import { Pipe, PipeTransform } from '@angular/core';
import 'lodash';
declare var _;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortBy : string, sortValue : number): any {
    if(sortBy === 'name')
    {
      // products.sort((a,b) => {
      //   if(a.name > b.name) return sortValue;
      //   else if(a.name < b.name) return -sortValue;
      //   else return 0;
      // })
      products = _.orderBy(products, ['name'], [sortValue == 1 ? 'asc' : 'desc']);
    }

    if(sortBy === 'price')
    {
      // products.sort((a,b) => {
      //   if(a.price > b.price) return sortValue;
      //   else if(a.price < b.price) return -sortValue;
      //   else return 0;
      // });
      products = _.orderBy(products, ['price'], [sortValue == 1 ? 'asc' : 'desc']);
    }
    return products;
  }

}
