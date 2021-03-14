import { Component } from "@angular/core";


@Component({
selector: 'app-titulo',
template: `
<h1> {{titulo}} </h1>
`
})
export  class TituloComponent {
titulo :string = 'titulo de prueba!!!!';
}