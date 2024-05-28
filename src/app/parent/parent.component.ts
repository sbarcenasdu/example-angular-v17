import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
   <app-child [message]="parentMessage"/>
   <button (click)="changeMessage()">Cambiar Mensaje</button>
  `,
  styles: ``
})
export class ParentComponent {

  parentMessage = "Hola desde el componente padre";

  changeMessage() {
    this.parentMessage = "El mensaje ha cambiado";
  }

}
