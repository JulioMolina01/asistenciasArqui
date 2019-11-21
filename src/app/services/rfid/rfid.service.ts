import { Injectable } from '@angular/core';
import { API } from '../../app-config';
import { Rfid } from '../../interfaces/rfid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token 1cd1700a58c17fc04bd13ed34a9dae034f091503'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class RfidService {

  apiURL: string = API;

  constructor(public http: HttpClient) { }

  //CRUD para RFID

  getRfid(){
    return this.http.get(`${this.apiURL}rfid/`, httpOptions)
  }

  createRfid(rfid: Rfid){
    return this.http.post(`${this.apiURL}rfid/`,rfid, httpOptions);
  }

  updateRfid(rfid: Rfid){
    return this.http.put(`${this.apiURL}rfid/${rfid.id}`,rfid, httpOptions);
  }

  deleteRfid(id: number){
    return this.http.delete(`${this.apiURL}rfid/${id}`, httpOptions);
  }

  getRfidById(id: number){
    return this.http.get(`${this.apiURL}rfid/${id}`, httpOptions);
  }

  getUnassigned() {
    return this.http.get(`${this.apiURL}rfid/unassigned`, httpOptions)
  }
  
}
