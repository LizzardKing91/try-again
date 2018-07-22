import { Injectable } from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = '//localhost:8080/car';  // URL to web api
  constructor(private http: HttpClient) { }
  /** GET heroes from the server */
  getCars (): Observable<Car[]> {
    const cars: Car [] = [];
    const url = `${this.carsUrl}/list`;
    return this.http.get<Car[]>(url).pipe();
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe();
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions).pipe();
  }
  addCar(car: Car): Observable<any> {
    return this.http.post<Car>(`${this.carsUrl}/add`, car, httpOptions).pipe();
  }
}

