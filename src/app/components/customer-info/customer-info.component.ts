import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/search.customer';
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
    this.customerService.customerInformation$
      .pipe()
      .subscribe(res => this.customer = res);
  }

  onReturn() {
    this.customerService.redirectToHomePage();
  }

}
