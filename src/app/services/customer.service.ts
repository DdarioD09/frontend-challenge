import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

import { Customer, SearchCustomerRequest, voidCustomer } from '../models/search.customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api: string = 'http://localhost:8090/api/v1/clients'
  private customer = new BehaviorSubject<Customer>(voidCustomer);

  constructor(private http: HttpClient) { }

  get customerInformation(): Observable<Customer> {
    return this.customer.asObservable();
  }

  public getCustomerById(request: SearchCustomerRequest): Observable<Customer> {
    const headers = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Document-Type', request.identificationType)
    };
    return this.http.get<Customer>(`${this.api}/${request.identificationNumber}`, headers)
      .pipe(
        map((response): Customer => {
          this.customer.next(response)
          return response
        }),
        catchError((err => this.handleError(err)))
      );
  }

  handleError(error: any): Observable<never> {
    let errorMessage = 'Ocurrio un error obteniendo la información del usuario';
    if (error) {
      // errorNotFound
      if (error.status === 404) {
        const { message } = error.error
        errorMessage = `Error: code ${message}`
      }
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}