import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit , OnDestroy{

  listCustomer:Customer[] = [];
  customer$: Observable<Customer[]>;
  customerSubscription:Subscription;
  
  constructor(private customerSercice:CustomerService) { }

  ngOnInit(): void {
    this.listCustomer = [];
    this.showListCustomer();
  }

  showListCustomer(){
    this.customer$ = this.customerSercice.getCustomer$();
    this.customerSubscription =this.customer$.subscribe(list => {
      this.listCustomer = list;
    });

  }

  ngOnDestroy(): void {
    if(this.customerSubscription!=null && this.customerSubscription!=undefined)
    this.customerSubscription.unsubscribe();
  }

}
