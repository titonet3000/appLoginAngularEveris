import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConocenosRoutingModule } from './conocenos-routing.module';
import { ConocenosComponent } from './conocenos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonsComponentesModule } from '../commons/commons-componentes/commons-componentes.module';


@NgModule({
  declarations: [
    ConocenosComponent
  ],
  imports: [
    CommonModule,
    ConocenosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonsComponentesModule
  ]
})
export class ConocenosModule { }
