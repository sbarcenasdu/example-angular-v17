import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>Component One</h2>
      <button (click)="increment()">Increment</button>
      <p>Count: {{ count }}</p>
    </div>
  `,
  styles: ``
})
export class ComponentOneComponent {
  count: number = 0;

  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

}
