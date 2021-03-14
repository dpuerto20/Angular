import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contadores/contador.component';
import {  TituloComponent } from './frase-titulo/titulo.component';
import {  FraseComponent } from './frase-titulo/frase.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TituloComponent,
    FraseComponent,
    HeroeComponent,
    ListadoComponent,
  
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
