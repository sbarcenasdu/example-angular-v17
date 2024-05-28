import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    
    <h1>{{message}}</h1>
  `,
  styles: ``
})


export class ChildComponent {
  @Input() message = '';

}
