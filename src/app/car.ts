import {RentHistory} from './rentHistory';

export class Car {
  id: number;
  name: string;
  number: string;
  currentPoint: string;
  available: boolean;
  historyList: RentHistory[];
  constructor(name: string, number: string,  currentPoint: string, available: boolean, historyList: RentHistory[]) {
    this.name = name;
    this.number = number;
    this.currentPoint = currentPoint;
    this.available = available;
    this.historyList = historyList;
  }
}
