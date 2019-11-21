import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer/customer.service';
import { Rfid } from '../../interfaces/rfid';
import { RfidService } from '../../services/rfid/rfid.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {

  customer: Customer = {
    name: null,
    ap_pat: null,
    ap_mat: null,
    matricula: null,
    email: null,
    gender: null,
    serial: null
  };

  rfid: Rfid = {
    serial: null,
    status: null
  };

  customers: Customer[];
  Customers: Customer[];
  Rfids: Rfid[];

  customerSelect = false;
  rfidSelect = false;

  customerName: string;
  rfidSerial: string;

  asigSerial: number;

  constructor(private customerService: CustomerService, private rfidService: RfidService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.getAllCustomers();
    this.getAllRfids();
  }

  ngOnInit() {}

  getAllCustomers() {
    this.customerService.getUnassigned().subscribe((
      response: Customer[] ) => {
        this.Customers = response;
      }
    );
  }

  getAllRfids() {
    this.rfidService.getUnassigned().subscribe((
      response: Rfid[] ) => {
        this.Rfids = response;
      }
    );
  }

  selectCustomer(id) {
    console.log(id);
    this.customerService.getCustomerById(id).subscribe((
      response: Customer[] ) => {
        this.customerName = id;
        this.customerSelect = true;

      }
    );
    
  }

  selectRfid(serial) {
    this.rfidService.getRfidById(serial).subscribe((
      response: Rfid[] )=> {
        this.rfidSerial = serial;
        this.rfidSelect = true;
      }
    );
  }

  removeCustomer() {
    this.customerSelect = false;
    console.log('Alumno Removido');
  }

  removeRfid() {
    this.rfidSelect = false;
    console.log('Rfid Removido');
  }

  asignar(customerName,rfidSerial) {
    console.log(customerName);
    console.log(rfidSerial);
    // customer.serial = idRfid;
    // this.customerService.updateCustomer(customer).subscribe((
    //   response: Customer ) => {
    //     this.customer.serial = idRfid;
    //         console.log('Alumno Actualizado ' + this.customer.serial);
    //     // this.router.navigateByUrl('/customers');
    //   }
    // );
  }

}
