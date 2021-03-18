import { Component } from '@angular/core';
import {Campeon} from '../personajes/interface/campeon'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
 export class MainPageComponent {
  campeones: Campeon[] = [
    {
      nombre: 'vi',
      poder: 300,
    },
    {
      nombre: ' darius',
      poder: 600,
    },
  ];

  nuevo: Campeon = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.campeones.push({...this.nuevo});
  }

}