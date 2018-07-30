import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {RentHistory} from '../rentHistory';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../car.service';
import {Location} from '@angular/common';
import {RentPoint} from '../rentPoint';
import {RentPointService} from '../rent-point.service';

@Component({
  selector: 'app-rent-point-details',
  templateUrl: './rent-point-details.component.html',
  styleUrls: ['./rent-point-details.component.css']
})
export class RentPointDetailsComponent implements OnInit {

  @Input() rentPoint: RentPoint;
  @Input() carList: Car[];

  constructor(
    private route: ActivatedRoute,
    private rentPointService: RentPointService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRentPoint();
    this.getCars();
  }

  getRentPoint(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rentPointService.getRentPoint(id)
      .subscribe(rentPoint => this.rentPoint = rentPoint);
  }
  getCars(): void {
    if (this.rentPoint.carList === null) {
      this.carList = [];
    } else {
      this.carList = this.rentPoint.carList;
    }
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
      () =>  this.goBack()
    );
  }
}
