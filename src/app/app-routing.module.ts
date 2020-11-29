import { ReservationsComponent } from './reservations/reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewCarComponent } from './new-car/new-car.component';
import { CarsComponent } from './cars/cars.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"cars",component:CarsComponent},
  {path:"newcar",component:NewCarComponent},
  //default route
  {path:"",redirectTo:"/cars",pathMatch:'full'},
  {path:"newcat",component:NewCategoryComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"newcustomer",component:NewCustomerComponent},
  {path:"customers",component:CustomersComponent},
  {path:"newreservation",component:NewReservationComponent},
  {path:"reservations",component:ReservationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
