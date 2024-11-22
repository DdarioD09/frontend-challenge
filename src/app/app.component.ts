import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from './models/search.customer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'frontend-challenge'
  customer?: Customer;
  customerExists: boolean = false;
  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.customerInformation$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res: Customer) => this.customer = res);

    this.customerService.doesCustomerExist$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res: boolean) => this.customerExists = res)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

}