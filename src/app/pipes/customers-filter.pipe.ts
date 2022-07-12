import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'customersFilter',
})
export class CustomersFilterPipe implements PipeTransform {
  transform(
    value: Required<Customer>[] | null,
    property: keyof Required<Customer>,
    term: string
  ): Required<Customer>[] | null {
    if (!value) {
      return null;
    }

    return value.filter((customer) =>
      customer[property]?.toLowerCase().includes(term.toLowerCase())
    );
  }
}
