import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customer:Customer;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  acceso():void{

    const entity:Customer = new Customer();
    entity.CODIGO = this.customer.CODIGO;
    entity.FIRSTNAME = this.customer.FIRSTNAME;
    entity.LASTNAME = this.customer.LASTNAME;

    this.customerService.setCustomer(entity);
    this.cleanCustomer();

  }

  cleanCustomer(){
    this.customer.CODIGO = "";
    this.customer.FIRSTNAME = "";
    this.customer.LASTNAME = "";
  }


}
