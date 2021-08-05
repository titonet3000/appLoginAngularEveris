import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer:Customer;
  listCustomer:Customer[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.listCustomer = [];
  }

  
  acceso():void{

    const entity:Customer = new Customer();
    entity.CODIGO = this.customer.CODIGO;
    entity.FIRSTNAME = this.customer.FIRSTNAME;
    entity.LASTNAME = this.customer.LASTNAME;

    this.listCustomer.push(entity);
    console.log("LISTA CLIENTES: " + JSON.stringify(this.listCustomer));
    this.cleanCustomer();



  }

  cleanCustomer(){
    this.customer.CODIGO = "";
    this.customer.FIRSTNAME = "";
    this.customer.LASTNAME = "";
  }

}
