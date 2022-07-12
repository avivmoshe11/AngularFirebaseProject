import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { switchMap, take } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit, OnDestroy {
  form: Required<Customer> = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private routerService: Router
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.update(this.form);
      this.routerService.navigate(['../..'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  ngOnDestroy(): void {
    console.log('bye');
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) =>
          this.customersService.getById(param['id']).pipe(take(1))
        )
      )
      .subscribe((customer) => {
        this.form = customer;
      });
  }
}
