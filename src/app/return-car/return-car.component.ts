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
  @Input() history: RentHistory;
  @Input() car: Car;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    this.getCar();
    // this.getHistory(this.car);
    this.getCurrentHistory(this.car);
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }
/*  getHistory(car: Car): RentHistory {
    return this.car.historyList.find(history => history.finalPoint === null);
  }*/

  getCurrentHistory(car: Car): RentHistory {
    let currentHistory =
    this.carService.getRentHistoryList().pipe(map(history => {
      const fl = history.filter(h => h.carNumber === car.number).filter(h => h.finalPoint === null);
      currentHistory = new RentHistory (fl[0].carName, fl[0].carNumber, fl[0].renterName, fl[0].finalPoint);
      // return (fl.length > 0) ? currentHistory : null;
      return currentHistory;
    }));
    return currentHistory;
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
}
