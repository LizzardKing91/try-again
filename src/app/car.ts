export class Car {
  id: number;
  name: string;
  number: string;
  currentPoint: string;
  available: boolean;
  constructor(name: string, number: string,  currentPoint: string, available: boolean) {
    this.name = name;
    this.number = number;
    this.currentPoint = currentPoint;
    this.available = available;
  }
}
