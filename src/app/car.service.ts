import { Injectable } from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = '//localhost:8080/cars';  // URL to web api
  constructor(private http: HttpClient) { }
  /** GET heroes from the server */
  getCars (): Observable<any[]> {
    const cars: Car [] = [];
    const url = `${this.carsUrl}`;
    return this.http.get<Car[]>(url).pipe();
  }

  getCar(id: number): Observable<any> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe();
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions).pipe();
  }
  addCar(car: Car): Observable<any> {
    return this.http.post<Car>(`${this.carsUrl}`, car, httpOptions).pipe();
  }

  deleteCar (car: Car | number) {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, httpOptions).pipe();
  }
}

