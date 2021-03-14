import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  gaseosas: string[] = [
    'Manzana',
    'Colombiana',
    'Tropical',
    'Coca Cola',
    'PoniMalta',
    'PePsi',
    
  ];
  GaseosaBorrado:string = ''
  BorrarGaseosa(){
    this.GaseosaBorrado = this.gaseosas.shift() || '' ;
  }
 
  
}


 