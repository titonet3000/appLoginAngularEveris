import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonsComponentesModule } from '../commons/commons-componentes/commons-componentes.module';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonsComponentesModule
  ]
})
export class CustomerModule { }
