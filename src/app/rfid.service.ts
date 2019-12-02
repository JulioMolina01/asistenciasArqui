import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class RfidService {

  private url = 'http://192.168.43.113:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

}
