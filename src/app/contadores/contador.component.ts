import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
   template: `
   <h1>{{title}}</h1>
   <h3>la base es :<strong>{{base}}</strong> </h3>
   
   <button class="btn btn-danger" (click)="acumular(base)"> +{{base}}</button>
   
   <div class="alert alert-primary" role="alert">
       {{numero}}
     </div>
   
   <button class="btn btn-primary" (click)="acumular(-base)"> -{{base}}</button>
   
   
   `
})
export class ContadorComponent{
    title :string = 'Contador APP';
    numero:number = 50;
  base: number = 5;
    acumular(valor:number){
      this.numero += valor;
    }
    
}