import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer, SearchCustomerRequest } from '../models/search.customer.interface.';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api: string = 'http://localhost:8090/api/v1/clients'

  constructor(private http: HttpClient) { }

  public getCustomerById(request: SearchCustomerRequest): Observable<Customer> {
    const headers = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Document-Type', request.identificationType)
    };
    return this.http.get<Customer>(`${this.api}/${request.identificationNumber}`, headers);
  }

}
