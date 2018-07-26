import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { IsAvailablePipe } from './cars/isAvailable.pipe';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RentPointsComponent } from './rent-points/rent-points.component';
import { RentPointDetailsComponent } from './rent-point-details/rent-point-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    IsAvailablePipe,
    CarDetailsComponent,
    RentPointsComponent,
    RentPointDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
