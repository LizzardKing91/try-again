import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../car.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  @Input() car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(hero => this.car = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.carService.updateCar(this.car)
      .subscribe(() => this.goBack());
  }
}
