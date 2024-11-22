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
  requestClient: SearchCustomerRequest = { identificationNumber: '23445322', identificationType: 'CEDULA' }

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.searchCustomer()
    // Validate a client with missing info
    // const fieldTiles: string[] = Object.keys(this.mockCustomer);
  }

  searchCustomer() {
    this.customerService
      .getCustomerById(this.requestClient)
      .subscribe(
        (res: Customer) => this.customer = res);
  }

  onReturn() {
    console.log('Hola');
  }

}
