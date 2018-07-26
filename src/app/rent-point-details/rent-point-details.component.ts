import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {RentHistory} from '../rentHistory';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../car.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rent-point-details',
  templateUrl: './rent-point-details.component.html',
  styleUrls: ['./rent-point-details.component.css']
})
export class RentPointDetailsComponent implements OnInit {

  @Input() car: Car;
  @Input() historyList: RentHistory[];

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCar();
    this.getHistory();
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }
  getHistory(): void {
    if (this.car.historyList === null) {
      this.historyList = [];
    } else {
      this.historyList = this.car.historyList;
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.carService.updateCar(this.car)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.carService.deleteCar(this.car).subscribe(
      () =>  this.goBack()
    );
  }
}
