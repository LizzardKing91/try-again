import {Component, Input, OnInit} from '@angular/core';
import {RentPoint} from '../rentPoint';
import {Car} from '../car';
import {ActivatedRoute} from '@angular/router';
import {RentPointService} from '../rent-point.service';
import {Location} from '@angular/common';
import {RentHistory} from '../rentHistory';
import {CarService} from '../car.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  @Input() rentPoint: RentPoint;
  @Input() car: Car;

  constructor(
    private route: ActivatedRoute,
    private rentPointService: RentPointService,
    private location: Location,
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    this.getCar();
  }

  getRentPoint(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rentPointService.getRentPoint(id)
      .subscribe(rentPoint => this.rentPoint = rentPoint);
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }

  add(carName: string, carNumber: string, renterName: string): void {
    renterName = renterName.trim();
    if (!renterName) { return; }
    const history = new RentHistory(carName, carNumber, renterName, null);
    this.carService.rentCar(history).subscribe(car => this.getCar());
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.rentPointService.updateRentPoint(this.rentPoint)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.rentPointService.deleteRentPoint(this.rentPoint).subscribe(
      () => this.goBack()
    );
  }
}

