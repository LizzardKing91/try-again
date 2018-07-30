import { Injectable } from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { MessageService } from './message.service';
import {promise} from 'selenium-webdriver';
import {RentHistory} from './rentHistory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = '//localhost:8080/cars';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }
  /** GET car from the server */
  getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(
        tap(cars => this.log('fetched cars')),
        catchError(this.handleError('getCars', []))
      );
  }

  /** GET car by id. Will 404 if id not found */
  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(_ => this.log(`fetched car id=${id}`)),
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(`${this.carsUrl}/${car.id}`, car, httpOptions).pipe();
  }
  /** POST: add a new car to the server */
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, httpOptions).pipe(
      tap((car: Car) => this.log(`added car w/ id=${car.id}`)),
      catchError(this.handleError<Car>('addCar'))
    );
  }

  deleteCar (car: Car | number) {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, httpOptions).pipe();
  }

  rentCar(history: RentHistory) {
    const url = `//localhost:8080/cars/rent`;
    return this.http.post<RentHistory>(url, history, httpOptions).pipe();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CarService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarService: ${message}`);
  }
}

