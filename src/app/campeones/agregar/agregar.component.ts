import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Campeon } from '../personajes/interface/campeon';
import { LolService } from '../services/lol.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  constructor(private LolService : LolService){
  }

  nuevo: Campeon = {
    nombre: '',
    poder: 0,
  };


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.LolService.agregarCampeon(this.nuevo)
    console.log(this.nuevo);
  }
}
