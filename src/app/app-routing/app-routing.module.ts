import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from '../cars/cars.component';
import { CarDetailsComponent } from '../car-details/car-details.component';
import {RentPointsComponent} from '../rent-points/rent-points.component';
import {RentPointDetailsComponent} from '../rent-point-details/rent-point-details.component';
import {RentCarComponent} from '../rent-car/rent-car.component';
import {ReturnCarComponent} from '../return-car/return-car.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars' , pathMatch: 'full'},
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'rent-points', component: RentPointsComponent},
  {path: 'points/:id', component: RentPointDetailsComponent},
  {path: 'points/:id', component: RentPointDetailsComponent},
  {path: 'car/:id', component: RentCarComponent},
  {path: 'car/return/:id', component: ReturnCarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
