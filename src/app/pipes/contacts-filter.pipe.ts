import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';
@Pipe({
  name: 'contactsFilter',
})
export class ContactsFilterPipe implements PipeTransform {
  transform(
    value: Contact[] | null,
    property: keyof Omit<Contact, 'phones' | 'birthday'>,
    term: string
  ): Contact[] | null {
    if (!value) {
      return null;
    }

    return value.filter((customer) =>
      customer[property]?.toLowerCase().includes(term.toLowerCase())
    );
  }
}
