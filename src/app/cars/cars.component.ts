import {Component, Input, OnInit} from '@angular/core';
import { Car } from '../car';
import {CarService} from '../car.service';

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

  add(name: string, number: string, currentPoint: string, available: boolean): void {
    name = name.trim();
    available = true;
    if (!name) { return; }
    let newCar;
    newCar = new Car(name, number, currentPoint, available);
    this.carService.addCar(newCar)
      .subscribe(car => {
        this.cars.push(newCar);
      });
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(c => c !== car);
    this.carService.deleteCar(car).subscribe();
  }
}
