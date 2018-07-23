
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from '../cars/cars.component';
import { CarDetailsComponent } from '../car-details/car-details.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'cars', component: CarDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
