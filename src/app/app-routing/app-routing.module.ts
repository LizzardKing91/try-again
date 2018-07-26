
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from '../cars/cars.component';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { AppComponent } from '../app.component';
import {RentPointsComponent} from '../rent-points/rent-points.component';
import {RentPointDetailsComponent} from '../rent-point-details/rent-point-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars' , pathMatch: 'full'},
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'rent-points', component: RentPointsComponent},
  {path: 'points/:id', component: RentPointDetailsComponent}

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
