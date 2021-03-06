import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RentPoint} from './rentPoint';
import {forEach} from '@angular/router/src/utils/collection';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RentPointService {

  constructor(private http: HttpClient) { }

  private rentPointUrl = '//localhost:8080/points';  // URL to web api
  private historyUrl = '//localhost:8080/history';
  /** GET cars from the server */
  getRentPoints (): Observable<RentPoint[]> {
    return this.http.get<RentPoint[]>(this.rentPointUrl)
      .pipe();
  }

  /** GET car by id. Will 404 if id not found */
  getRentPoint (id: number): Observable<RentPoint> {
    const url = `${this.rentPointUrl}/${id}`;
    return this.http.get<RentPoint>(url).pipe();
  }
  getRentPointsAddresses(points: RentPoint[]): string[] {
    let addresses: string[];

    addresses = points.map(point => point.address);
    return addresses;
  }

  getStatistic(address: string, model: string): Observable<number> {
    return this.http.get<number>(`${this.historyUrl}/${address}/${model}`).pipe();
  }

  updateRentPoint (rentPoint: RentPoint): Observable<any> {
    return this.http.put(`${this.rentPointUrl}/${rentPoint.id}`, rentPoint, httpOptions).pipe();
  }
  /** POST: add a new car to the server */
  addRentPoint (rentPoint: RentPoint): Observable<RentPoint> {
    return this.http.post<RentPoint>(this.rentPointUrl, rentPoint, httpOptions).pipe();
  }

  deleteRentPoint (rentPoint: RentPoint| number) {
    const id = typeof rentPoint === 'number' ? rentPoint : rentPoint.id;
    const url = `${this.rentPointUrl}/${id}`;

    return this.http.delete<RentPoint>(url, httpOptions).pipe();
  }
}
