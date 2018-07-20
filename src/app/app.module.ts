import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { IsAvailablePipe } from './cars/isAvailable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    IsAvailablePipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
