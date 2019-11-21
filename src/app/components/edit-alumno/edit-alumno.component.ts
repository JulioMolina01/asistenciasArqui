import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer/customer.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css']
})
export class EditAlumnoComponent implements OnInit {

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
  edit: boolean = false;

  constructor(private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.edit = true;
      this.customerService.getCustomers().subscribe((
        response: Customer[] ) => {
          this.customers = response;
          this.customer = this.customers.find((m) => {
            return m.id == this.id
          });
        }
      );
    }
    else {
      this.edit = false;
    }
  }

  updateCustomer() {
    if (this.edit) {
      delete this.customer;
      this.customerService.updateCustomer(this.customer).subscribe((
        response: Customer ) => {
         console.log('Alumno Actualizado');
         this.router.navigateByUrl('/customers');
        }
      );
    }
  }

}
