import { Apartment } from './apartment';

export class CenterApartment extends Apartment {
  district: string;
  avg: number=0;

  constructor(name: string, pricePerM2: number, area: number, district: string) {
    super(name, pricePerM2, area);
    this.district = district;
  }

  override calcCost(): number {
    const baseCost = super.calcCost();
    const Cost = baseCost + baseCost * 0.01;
    return Cost;
  }
  calcAvg():number{
    this.avg = (super.calcCost() + this.calcCost())/2;
    return this.avg;
  }
}