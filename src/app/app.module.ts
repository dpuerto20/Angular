import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contadores/contador.component';
import { TituloComponent } from './frase-titulo/titulo.component';
import { FraseComponent } from './frase-titulo/frase.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent, FraseComponent, TituloComponent, ContadorComponent],
  imports: [BrowserModule, HeroesModule], // ContadoresModule, FraseTituloModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
