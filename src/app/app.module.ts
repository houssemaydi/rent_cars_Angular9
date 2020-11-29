import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { NewCarComponent } from './new-car/new-car.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NewCarComponent,
    CategoriesComponent,
    CustomersComponent,
    ReservationsComponent,
    NewCategoryComponent,
    NewCustomerComponent,
    NewReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
