import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  
})
export class FilterPipe implements PipeTransform {
  transform(Allusers: any[], searchKey: string, propName: string): any[] {
    const result: any = [];
    if (!Allusers || searchKey == '' || propName == '') {
      return Allusers;
    }
    Allusers.forEach((user: any) => {
      if (
        user[propName].trim().toLowerCase().includes(searchKey.toLowerCase())
      ) {
        result.push(user);
      }
    });

    return result;
  }
}