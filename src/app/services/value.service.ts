import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  getValue(): string {
    return 'Real value';
  }

  getObservableValue(): Observable<string> {
    return of('observable value');
  }

  getPromiseValue(): Promise<string> {
    return new Promise((resolve) => {
      resolve('promise value')
    });
  }

}
