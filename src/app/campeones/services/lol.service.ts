import { Injectable } from '@angular/core';
import { Campeon } from '../personajes/interface/campeon';

@Injectable()
export class LolService {
  private _campeones: Campeon[] = [
    {
      nombre: 'vi',
      poder: 300,
    },
    {
      nombre: ' darius',
      poder: 600,
    },
    {
      nombre: 'teemo',
      poder: 7000,
    },
  ];

  constructor() {
    console.log('servicio inicializado');
  }

  get campeones(): Campeon[] {
    return this._campeones;
  }

  agregarCampeon(campeon: Campeon) {
    this.campeones.push(campeon);
  }
}
