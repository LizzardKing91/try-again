import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import {RentPointService} from '../rent-point.service';
import {RentPoint} from '../rentPoint';

@Component({
  selector: 'app-rent-points',
  templateUrl: './rent-points.component.html',
  styleUrls: ['./rent-points.component.css']
})
export class RentPointsComponent implements OnInit {
  rentPoints: RentPoint[];

  constructor(private rentPointService: RentPointService) { }
  ngOnInit() {
    this.getRentPoints();
  }

  getRentPoints(): void {
    this.rentPointService.getRentPoints().subscribe(rentPoints => this.rentPoints = rentPoints);
  }

  add(address: string, id: number, carList: Car[]): void {
    address = address.trim();
    if (!name) { return; }
    const rentPoint = new RentPoint(id, address, carList);
    this.rentPointService.addRentPoint(rentPoint)
      .subscribe(newRentPoint => this.getRentPoints());
  }
  getAvailableCarsAmount(rentPoint: RentPoint): number {
    return rentPoint.carList.map(car => car.available === true).length;
  }

  delete(rentPoint: RentPoint): void {
    this.rentPoints = this.rentPoints.filter(c => c !== rentPoint);
    this.rentPointService.deleteRentPoint(rentPoint).subscribe();
  }

}
