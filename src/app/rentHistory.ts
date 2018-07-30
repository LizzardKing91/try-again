export class RentHistory {
  carName: string;
  carNumber: string;
  renterName: string;
  startPoint: string;
  startDate: number;
  finalPoint: string;
  finalDate: number;
  constructor(carName: string, carNumber: string, renterName: string, finalPoint: string) {
    this.carName = carName;
    this.carNumber = carNumber;
    this.renterName = renterName;
    this.finalPoint = finalPoint;
  }
}
