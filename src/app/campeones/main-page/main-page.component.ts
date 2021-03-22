import { Component, Input } from '@angular/core';
import { Campeon } from '../personajes/interface/campeon';
import { LolService } from '../services/lol.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Campeon = {
    nombre: 'Victor',
    poder: 500,
  };

  constructor(private LolService: LolService) {}

  nuevoCampeonLista(campeon: Campeon) {
    // this.LolService.mostrarCampeones()
    // this.campeones.push(campeon);
  }

  mostrarCampones() {
    // const campeones = this.LolService.mostrarCampeones();
    // console.log(campeones);
    
  }
}
