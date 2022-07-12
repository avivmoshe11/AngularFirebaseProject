import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  doc,
  Firestore,
  addDoc,
  deleteDoc,
  updateDoc,
  collectionData,
  docData,
} from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersRef: CollectionReference<Required<Customer>>;
  private customers$: Observable<Required<Customer>[]>;

  constructor(private afs: Firestore) {
    this.customersRef = collection(
      this.afs,
      'customers'
    ) as CollectionReference<Required<Customer>>;

    this.customers$ = collectionData(this.customersRef, {
      idField: 'id',
    }).pipe(shareReplay(1));
  }

  getAll() {
    return this.customers$;
  }

  getById(id: string) {
    const docRef = doc(this.customersRef, id);
    return docData(docRef, {
      idField: 'id',
    });
  }

  add(customer: Omit<Customer, 'id'>) {
    return addDoc(this.customersRef, customer);
  }

  remove(id: Customer['id']) {
    const docRef = doc(this.customersRef, id);
    return deleteDoc(docRef);
  }

  update({ id, ...customer }: Required<Customer>) {
    const docRef = doc(this.customersRef, id);
    return updateDoc(docRef, customer);
  }
}
