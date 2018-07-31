import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CarService} from '../car.service';
import {RentHistory} from '../rentHistory';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-return-car',
  templateUrl: './return-car.component.html',
  styleUrls: ['./return-car.component.css']
})
export class ReturnCarComponent implements OnInit {
  @Input() car: Car;
  @Input() history: RentHistory;
  @Input() carNumber: string;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    this.getCar();
    this.getCarNumber();
    this.getCurrentHistory(this.carNumber);
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }

  getCarNumber(): void {
    this.carNumber = this.route.snapshot.paramMap.get('carNumber');
  }

  getCurrentHistory(carNumber: string): void {
    this.carService.getCurrentHistory(carNumber).subscribe(history => this.history = history);
    console.log(this.history.renterName);
    console.log(this.history.startDate);
  }

  add(carName: string, carNumber: string, renterName: string, finalPoint: string): void {
    finalPoint = finalPoint.trim();
    if (!finalPoint) { return; }
    const history = new RentHistory(carName, carNumber, renterName, finalPoint);
    this.carService.returnCar(history, this.car.id).subscribe(car => this.getCar());
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
