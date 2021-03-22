import { Component, Input, OnInit } from '@angular/core';
import { Campeon } from '../personajes/interface/campeon';
import { LolService } from '../services/lol.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  constructor(private lolService: LolService) {
    console.log('PersonajesComponent constructor');
  }
  campeones: Campeon[];

  ngOnInit() {
   this.campeones = this.lolService.campeones
  }

  mostrarCampones() {
    const campeones = this.lolService.campeones;
    console.log(campeones);
  }

}