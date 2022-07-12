import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  input1 = '';
  input2 = '';
  input3 = '';

  customers$: Observable<Required<Customer>[]>;

  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }

  remove(id: string) {
    // if (!id) {
    //   return;
    // }
    if (confirm('Are you sure you want to delete?')) {
      this.customersService.remove(id);
    }
  }

  ngOnInit(): void {}
}
