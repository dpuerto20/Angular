import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: `heroe.component.html`,
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 60;
 get nombreCapitalizado():string {
return this.nombre.toUpperCase(); 
 }
  get obtenerNombre(): string {
    return ` ${this.nombre}- ${this.edad}`;
  }
   CambiarNombre() : void {
this.nombre='Spider Man';
  }
  CambiarEdad():void{
this.edad = 22;
  }
}
