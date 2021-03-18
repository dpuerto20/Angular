import { Component, Input } from '@angular/core';
import { Campeon } from '../personajes/interface/campeon';

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
    {
      nombre:'teemo',
      poder:7000,
    }
  ];
nuevo :Campeon = {
  nombre: 'victor',
  poder: 600
 }


  

}