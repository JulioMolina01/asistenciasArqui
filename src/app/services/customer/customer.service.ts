import { Injectable } from '@angular/core';
import { API } from '../../app-config';
import { Customer } from '../../interfaces/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token 2785f48979e248682f183f06fbbc47d9c2391320'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  apiURL: string = API;

  constructor(public http: HttpClient) { }

  //CRUD para Customer (Alumno)

  getCustomers() {
    return this.http.get(`${this.apiURL}alumno/`, httpOptions)
  }

  createCustomer(customer: Customer) {
    return this.http.post(`${this.apiURL}alumno/`, customer, httpOptions);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(`${this.apiURL}alumno/${customer.id}`, customer, httpOptions);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.apiURL}alumno/${id}`, httpOptions);
  }

  getCustomerById(id: number) {
    return this.http.get(`${this.apiURL}alumno/${id}`, httpOptions);
  }

  getUnassigned() {
    return this.http.get(`${this.apiURL}alumno/unassigned`, httpOptions)
  }
}
