import { Component, OnInit } from '@angular/core';
import { Rfid } from '../../interfaces/rfid';
import { RfidService } from '../../services/rfid/rfid.service';

@Component({
  selector: 'app-rfids',
  templateUrl: './rfids.component.html',
  styleUrls: ['./rfids.component.css']
})
export class RfidsComponent implements OnInit {

  Rfids: Rfid[];

  constructor(private rfidService: RfidService) {
    this.getAllRfids();
   } 

  ngOnInit() {
  }

  getAllRfids() {
    this.rfidService.getRfid().subscribe((
      response: Rfid[] ) => {
        this.Rfids = response;
      }
    );
  }

  deleteRfid(id) {
    this.rfidService.deleteRfid(id).subscribe((
      response: { data: Rfid }) => {
        this.getAllRfids();
      }
    );
  }

}