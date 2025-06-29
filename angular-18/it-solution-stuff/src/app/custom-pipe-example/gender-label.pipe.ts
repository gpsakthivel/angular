import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderLabel',
  standalone: true
})
export class GenderLabelPipe implements PipeTransform {

  transform(name: string, gender: any): string {
    if(gender == 0){
      return 'Mr. '+name;
    }
    return 'Miss. '+name;
  }

}
