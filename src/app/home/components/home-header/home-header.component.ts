import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Customer } from 'src/app/customer/models/customer';
import { CustomerService } from 'src/app/customer/services/customer.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit, OnDestroy {

  countCustomer:number;
  customer$:Observable<Customer[]>;
  customerSubscription:Subscription;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.countCustomer = 0;

    this.customer$ = this.customerService.getCustomer$();
    this.customerSubscription = this.customer$.subscribe(list => {
      this.countCustomer = list.length;

    });
  }

  ngOnDestroy(): void {
    if(this.customerSubscription!=null && this.customerSubscription!=undefined)
    this.customerSubscription.unsubscribe();
  }


}
