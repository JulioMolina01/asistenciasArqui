import { Injectable } from '@angular/core';
import { API } from '../../app-config';

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

export class AsistenciaService {

  apiURL: string = API;

  constructor(public http: HttpClient) { }

  //CRUD para Asistencia (Asistencia)
}
