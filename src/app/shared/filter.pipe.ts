import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Pipe({
 name: 'filter'
})
export class FilterPipe implements PipeTransform {
 private searchSubject = new Subject<any[]>();
 constructor() {
   this.searchSubject.pipe(
     debounceTime(3000), // Adjust debounce time to 3000 milliseconds (3 seconds)
   ).subscribe();
 }
 transform(value: any[], filterString: string, propName: string): any[] {
   if (!value || filterString === '' || propName === '') {
     return value;
   }
   this.searchSubject.next; // Reset the timer on each keypress
   return value.filter(item =>
     item[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())
   );
 }
}