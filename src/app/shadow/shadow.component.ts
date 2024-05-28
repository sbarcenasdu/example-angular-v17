import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-shadow',
  standalone: true,
  imports: [],
  template: `
    <p>
      shadow works!
      {{ edad + 10 }}
    </p>

    @if (logged) {
    <h1>{{ nombre }}</h1>
    } @else{
    <p>Inicia sesión</p>
    }

    <ul>
      @for (number of numbers; track number){
      <li>{{ number }} - {{ nombre }}</li>
      }@empty {
      <li>No hay elementos</li>
      }
    </ul>

    @switch(number){ @case(1){
    <p>Uno</p>
    } @case(2){
    <p>Dos</p>
    } @default{
    <p>Otro</p>
    } }


  `,
  styles: `
  h1 {
    color: green;
  }
  .red {
    color: red;
  }
  
  `,
})
export class ShadowComponent {
  @Input() myInput = '';
  numbers: number[] = [1, 2, 3, 4, 5];
  number = 0;
  nombre = 'Juan';
  logged = true;
  edad = 18;
  doble: number | undefined = 0;

  listaEnteros: Array<number> = [];
  listaDesconocidos: Array<any> = [];

  suma(a: number, b: number): number {
    return a + b;
  }
}

//PRINCIPIOS SOLID
//1. Responsabilidad unica

//incorrecta
class Usuario {
  guardarUsuario(usuario: any) {
    //guardar usuario
  }
  enviarCorreo(usuario: any) {
    //enviar correo
  }
}

//correcta
class UsuarioCorrecto {
  guardarUsuario(usuario: any) {
    //guardar usuario
  }
}
class Correo {
  enviarCorreo(usuario: any) {
    //enviar correo
  }
}

//2. Abierto/Cerrado
//incorrecta
class Rectangulo {
  alto: number = 0;
  ancho: number = 0;
}
class CalculadoraArea {
  calcularArea(rectangulo: Rectangulo) {
    return rectangulo.alto * rectangulo.ancho;
  }
}

//correcta
interface Figura {
  calcularArea(): number;
}

class RectanguloCorrecto implements Figura {
  alto: number = 0;
  ancho: number = 0;
  calcularArea() {
    return this.alto * this.ancho;
  }
}

//3. Sustitucion de Liskov
//incorrecta
class Pajaro {
  volar() {
    return 'Volando';
  }
}

class Pinguino extends Pajaro {
  override volar() {
    return 'No puedo volar';
  }
}

//correcta
interface Volador {
  volar(): string;
}

class PinguinoCorrecto implements Volador {
  volar() {
    return 'Nadando';
  }
}

//4.separacion de interfaces
//incorrecta
interface Trabajador {
  trabajar(): string;
  descansar(): string;
}

class Empleado implements Trabajador {
  trabajar() {
    return 'Trabajando';
  }
  descansar() {
    return 'Descansando';
  }
}
//correcta
interface TrabajadorCorrecto {
  trabajar(): string;
}
interface Descansador {
  descansar(): string;
}

//5. Inversion de dependencias
//incorrecta
class Lampara {
  encender() {
    return 'Encendida';
  }
}
class Interruptor {
  encenderLampara(lampara: Lampara) {
    return lampara.encender();
  }
}
//correcta
interface Dispositivo {
  encender(): string;
}
class LamparaCorrecta implements Dispositivo {
  encender() {
    return 'Encendida';
  }
}

class InterruptorCorrecto {
  encenderDispositivo(dispositivo: Dispositivo) {
    return dispositivo.encender();
  }
}
