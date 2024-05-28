import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  private counter = 0;

  increment() {
    this.counter++;
  }

  getCount(){
    return this.counter;
  }


}
