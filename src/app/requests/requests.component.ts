import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>requests works!</p>
    <p [ngClass]="'my-class'">my ng-class</p>

    <hr>
    @for(user of users; track user){
      <p>Id: {{ user.id }}</p>
      <p>Nombre: {{ user.name }}</p>
      <p>Especie: {{ user.species }}</p>
      <hr>
    }@empty {
      <p>No hay datos</p>
    }

    <!-- <h2>Con PIPE</h2>
    @if(data$ | async; as data){
      @for(item of data; track item){
        <p>Nombre: {{ item.name }}</p>
        <p>Especie: {{ item.species }}</p>
        <p>Genero: {{ item.gender }}</p>
        <hr>
      }@empty {
      <p>No hay datos</p>
      }
    }@else{
      <p>No hay datos. Error de peticion</p>
    } -->
  `,
  styles: `
  .my-class{
    background-color: red;  
  }`,
})


export class RequestsComponent implements OnInit {
  users: any[] = [];
  // constructor(private dataService: DataService) {}
  private dataService: DataService = inject(DataService);

  // data$: Observable<any> = this.dataService.getData();

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe({
      next: (data) => {
        //metodo principal para manejar los valores emitidos por el observable
        this.users = data;
      },
      error: (error) => {
        //metodo para manejar los errores
        console.log(error);
      },
      complete: () => {
        //metodo que se ejecuta cuando el observable se completa
        console.log('Complete'); //ya no podra emitir mas valores
      },
    });
  }
}
