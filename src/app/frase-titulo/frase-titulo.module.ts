import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FraseComponent } from './frase.component';
import { TituloComponent } from './titulo.component';

@NgModule({
    declarations:[FraseComponent,TituloComponent],
imports:[CommonModule],
exports:[TituloComponent,FraseComponent]
})
export class FraseTituloModule {}

