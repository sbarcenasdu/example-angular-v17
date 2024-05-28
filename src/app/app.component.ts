import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { RequestsComponent } from './requests/requests.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, ParentComponent, TaskListComponent, ComponentOneComponent, ComponentTwoComponent,
    RequestsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example17';
}
