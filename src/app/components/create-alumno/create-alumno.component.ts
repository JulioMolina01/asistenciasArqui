import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.css']
})
export class CreateAlumnoComponent implements OnInit {

  customer: Customer = {
    name: null,
    ap_pat: null,
    ap_mat: null,
    matricula: null,
    email: null,
    gender: null,
    serial: null
  };

  customers: Customer[];

  id: any;

  constructor(private customerService: CustomerService, private router:Router) {}

  ngOnInit() {
  }

  createCustomer() {
   this.customerService.createCustomer(this.customer).subscribe((
     response: { data: Customer }) => {
      console.log('Alumno Creado');
      this.router.navigateByUrl('/customers');
     }
   );
  }

}
