import {Car} from './car';

export class RentPoint {
  id: number;
  address: string;
  carList: Car[];
  constructor(id: number, address: string, carList: Car[]) {
    this.id = id;
    this.address = address;
    this.carList = carList;
  }
}
