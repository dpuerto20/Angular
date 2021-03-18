import { Component, Input } from '@angular/core';
import { Campeon } from '../personajes/interface/campeon';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  campeones: Campeon[];

  @Input()
  nuevo: Campeon  


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    console.log(this.campeones);

    this.campeones.push({ ...this.nuevo });
  }
}
