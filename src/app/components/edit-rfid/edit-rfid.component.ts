import { Component, OnInit } from '@angular/core';
import { Rfid } from '../../interfaces/rfid';
import { RfidService } from '../../services/rfid/rfid.service';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-edit-rfid',
  templateUrl: './edit-rfid.component.html',
  styleUrls: ['./edit-rfid.component.css']
})
export class EditRfidComponent implements OnInit {

  rfid: Rfid = {
    serial: null,
    status: null
  };

  rfids: Rfid[];

  id: any;
  edit: boolean = false;

  constructor(private rfidService: RfidService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.edit = true;
      this.rfidService.getRfid().subscribe((
        response: Rfid[] ) => {
          this.rfids = response;
          this.rfid = this.rfids.find((m) => {
            return m.id == this.id
          });
        }
      );
    }
    else {
      this.edit = false;
    }
  }

  updateRfid() {
    if (this.edit) {
      this.rfidService.updateRfid(this.rfid).subscribe((
        response: Rfid ) => {
         console.log('Rfid Actualizado');
         this.router.navigateByUrl('/rfids');
        }
      );
    }
  }

}
