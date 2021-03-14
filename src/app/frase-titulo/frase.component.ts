import { Component } from '@angular/core';

@Component({
  selector: 'app-frase',
  template: `
    <h2> {{frase}}</h2>
    <button >{{verdadero}}</button> 

    <button>{{falso}}</button>
    `,
})
export class FraseComponent {
  frase: string =
    'los malos de la pelicula empiezan a caer bien cuando los buenos lo hacen mal';
  verdadero: string[] = ['verdadero'];
  falso: string = 'falso';
}
