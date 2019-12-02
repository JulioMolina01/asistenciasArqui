import { Injectable } from '@angular/core';
import { API } from '../../app-config';

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

export class AsistenciaService {

  apiURL: string = API;

  constructor(public http: HttpClient) { }

  //CRUD para Asistencia (Asistencia)
}
