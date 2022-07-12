import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CustomersFilterPipe } from './pipes/customers-filter.pipe';

import { FormsModule } from '@angular/forms';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { ContactsFilterPipe } from './pipes/contacts-filter.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignOutDirective } from './directives/sign-out.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PageHeaderComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    CustomersComponent,
    CustomersFilterPipe,

    CustomersDetailsComponent,
    CustomersNewComponent,
    CustomersEditComponent,
    ContactsFilterPipe,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    SignOutDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
