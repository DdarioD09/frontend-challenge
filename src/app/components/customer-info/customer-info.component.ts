import { Component, OnInit } from '@angular/core';
import { Customer, SearchCustomerRequest } from 'src/app/models/search.customer.interface.';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer!: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.searchCustomer()
  }

  searchCustomer() {
    this.customerService
      .getCustomerById({ identificationNumber: '23445322', identificationType: 'CEDULA' })
      .subscribe(
        (res: Customer) => {
          this.customer = res
          console.log("🚀 ~ SearchClientComponent ~ getClient ~ this.client:", this.customer)
        }
      );
  }

  onReturn() {
    console.log('Hola');
  }

}
