import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-inline',
  standalone: true,
  imports: [],
  template: `
    <p>
      comp-inline works!
    </p>
    <h1>
      Inline Component
    </h1>
    <div>
      <p>
        This is an inline component.
      </p>
      <p>
        It is defined in the same file as the parent component.
      </p>
      <p>
        It is not exported, so it is not available to other components.
      </p>
    </div>
  `,
  styles: `
    h1 {
      color: blue;
    }
    div {
      border: 1px solid black;
      padding: 10px;
    }
  `
})

export class CompInlineComponent {

}
