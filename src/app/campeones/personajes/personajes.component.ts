import { Component, Input, OnInit } from '@angular/core';
import { Campeon  } from '../personajes/interface/campeon';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {
  @Input()
campeones : Campeon[]

}
