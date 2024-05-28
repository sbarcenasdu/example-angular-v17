import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl1 = 'https://jsonplaceholder.typicode.com/todos/1';
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((res: any) => {
          return res.results;
        }),
        catchError((error: any) => {
          return error;
        })
      );
  }
}

/*
¿Por qué no hay una suscripción en este código?
La suscripción no está presente en este código porque el servicio está diseñado para devolver un Observable. La suscripción a un observable generalmente se realiza en el componente que consume este servicio, no en el propio servicio. Esto sigue el principio de responsabilidad única y permite que el componente decida cómo manejar los datos y errores.
*/