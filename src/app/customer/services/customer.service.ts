import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private listCustomer:Customer[];
  private customer$ =  new Subject<Customer[]>();
  
  constructor(   
  ) { 
    this.listCustomer = [];
  }

  setCustomer(customer:Customer){
    this.listCustomer.push(customer);
    this.customer$.next(this.listCustomer);
  }

  getCustomer$():Observable<Customer[]>{
    return this.customer$.asObservable();
  }
}
