import { Component, OnInit } from '@angular/core';
import { Rfid } from '../../interfaces/rfid';
import { RfidService } from '../../services/rfid/rfid.service';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-rfid',
  templateUrl: './create-rfid.component.html',
  styleUrls: ['./create-rfid.component.css']
})
export class CreateRfidComponent implements OnInit {

  rfidsSubscription: Subscription
  rfidsArray: any[] = [];
  elemento: HTMLElement;

  rfid: Rfid = {
    serial: null,
    status: false
  }

  rfids: Rfid[];

  id: any;

  constructor(private rfidService: RfidService, private router:Router, public chatService: ChatService) {}

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes')
    this.rfidsSubscription = this.chatService.getMessages().subscribe(msg => {
      this.rfidsArray.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy() {
    this.rfidsSubscription.unsubscribe();
  }

  createRfid(msg) {
    this.rfid.serial=msg;
    this.rfidService.createRfid(this.rfid).subscribe((
      response: { data: Rfid} ) => {
        console.log('Rfid Creado');
        this.router.navigateByUrl('/rfids');
      }
    );
    
    this.rfidsArray[msg].delet();
  }
  
  selectRfid(id){
    console.log(id);
    
  }

}
