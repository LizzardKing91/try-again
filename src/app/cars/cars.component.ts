import {Component, Input, OnInit} from '@angular/core';
import { Car } from '../car';
import {CarService} from '../car.service';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }
  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

}
