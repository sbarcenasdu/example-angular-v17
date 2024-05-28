import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>Component Two</h2>
      <button (click)="increment()">Increment</button>
      <p>Count: {{ count }}</p>
    </div>
  `,
  styles: ``
})
export class ComponentTwoComponent {
  count: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.count = this.counterService.getCount();
  }

  increment() {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

}
