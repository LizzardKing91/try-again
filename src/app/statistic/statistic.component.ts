import {Component, Input, OnInit} from '@angular/core';
import {CarService} from '../car.service';
import {RentPointService} from '../rent-point.service';
import {RentHistory} from '../rentHistory';
import {Car} from '../car';
import {RentPoint} from '../rentPoint';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input() models: string[];
  @Input() addresses: string[];
  @Input() cars: Car[];
  @Input() rentPoints: RentPoint[];
  statistic: string[];
  @Input() tempRes: number;
  constructor(private carService: CarService, private rentPointService: RentPointService) { }
  ngOnInit() {
    this.getCars();
    this.getPoints();
  }
  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);

    this.models = this.cars.map(car => car.name);
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    this.models = this.models.filter(unique);
  }
  getPoints(): void {
    this.rentPointService.getRentPoints().subscribe(rentPoints => this.rentPoints = rentPoints);
    this.addresses = this.rentPoints.map(point => point.address);
  }

  getStatistic(): void {

  }

  getStatistics(address: string, model: string): void {
    this.rentPointService.getStatistic(address, model).subscribe(tempRes => this.tempRes = tempRes);
  }
}
