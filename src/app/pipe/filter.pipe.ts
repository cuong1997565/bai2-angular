import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: [], id :string, name :string, status :string ): any {
    if(!id && !name && !status){
      return products;
    }
    else {
      if(id) {
        return  products.filter(x => {
            return x.id.toString().indexOf(id) != -1;
          })
      }
      if(name) {
       return products.filter(x => {
          return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
        })
      }
      if(status)
      {
       return products.filter(x => {
          return x.status.toString().toLowerCase().indexOf(status.toLowerCase()) != -1;
      });
      }
    }
    return products;
  }

}
