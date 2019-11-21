import { Component, OnInit } from '@angular/core';
import { Rfid } from '../../interfaces/rfid';
import { RfidService } from '../../services/rfid/rfid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rfid',
  templateUrl: './create-rfid.component.html',
  styleUrls: ['./create-rfid.component.css']
})
export class CreateRfidComponent implements OnInit {

  rfid: Rfid = {
    serial: null,
    status: false
  }

  rfids: Rfid[];

  id: any;

  constructor(private rfidService: RfidService, private router:Router) {}

  ngOnInit() {
  }

  createRfid() {
    this.rfidService.createRfid(this.rfid).subscribe((
      response: { data: Rfid} ) => {
        console.log('Rfid Creado');
        this.router.navigateByUrl('/rfids');
      }
    );
  }

}
