import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './interfaces/customer';
import { Rfid } from './interfaces/rfid';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // apiURL: string = 'http://djangobb.ddns.net/';

  constructor(private httpClient: HttpClient) {}

  //CRUD para Customer (Alumno)
  // public createCustomer(customer: Customer){
  //   return this.httpClient.post(`${this.apiURL}/customers/`,customer);
  // }
  // public updateCustomer(customer: Customer){
  //   return this.httpClient.put(`${this.apiURL}/customers/${customer.id}`,customer);
  // }
  // public deleteCustomer(id: number){
  //   return this.httpClient.delete(`${this.apiURL}/customers/${id}`);
  // }
  // public getCustomerById(id: number){
  //   return this.httpClient.get(`${this.apiURL}/customers/${id}`);
  // }
  // public getCustomers(url?: string){
  //   return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`)
  // }

  //CRUD para RFID
  // public createRfid(rfid: Rfid){
  //   return this.httpClient.post(`${this.apiURL}/rfids/`,rfid);
  // }
  // public updateRfid(rfid: Rfid){
  //   return this.httpClient.put(`${this.apiURL}/frids/${rfid.id}`,rfid);
  // }
  // public deleteRfid(id: number){
  //   return this.httpClient.delete(`${this.apiURL}/rfids/${id}`);
  // }
  // public getRfidById(id: number){
  //   return this.httpClient.get(`${this.apiURL}/rfids/${id}`);
  // }
  // public getRfid(url?: string){
  //   return this.httpClient.get<Rfid[]>(`${this.apiURL}/rfids`)
  // }
}

