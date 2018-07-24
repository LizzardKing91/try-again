import {Component, Input, OnInit} from '@angular/core';
import { Car } from '../car';
import {CarService} from '../car.service';
import {RentHistory} from '../rentHistory';

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

  add(name: string, number: string, currentPoint: string, available: boolean, historyList: RentHistory[], id: number): void {
    name = name.trim();
    available = true;
    if (!name) { return; }
    const newCar = new Car(name, number, currentPoint, available, historyList);
    this.carService.addCar(newCar)
      .subscribe(car => this.getCars());
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(c => c !== car);
    this.carService.deleteCar(car).subscribe();
  }
}
