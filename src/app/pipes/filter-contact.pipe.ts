import { Contacts } from 'src/app/modules/side-bar/contacts/contacts';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(array: Contacts[], filter?: string): any {
    if (array != null){
      return array.filter(({ lastName, firstName  }) =>
        lastName.toUpperCase().includes(filter.toUpperCase()) || firstName.toUpperCase().includes(filter.toUpperCase())
      );
    }

  }

}
