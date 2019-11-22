import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebSocketService
  ) { }

  sendMessage(mensaje: string) {
    const payload = {      
      cuerpo: mensaje
    };
    this.wsService.emit('mensaje', payload);
  }

  getMessages() {
    return this.wsService.listen('mensaje-response');
  }

}
