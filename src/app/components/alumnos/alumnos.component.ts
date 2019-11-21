import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  Customers: Customer[]; 

  constructor(private customerService: CustomerService) { 
    this.getAllCustomers();
  }

  ngOnInit() {
  }

  getAllCustomers() {
    this.customerService.getCustomers().subscribe((
      response: Customer[] ) => {
        this.Customers = response;
        console.log(response);
      }
    );
  }

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id).subscribe((
      response: Customer ) => {
        this.getAllCustomers();
      }
    );
  }

}