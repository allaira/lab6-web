import { Apartment } from './apartment';

export class CenterApartment extends Apartment {
  district: string;

  constructor(name: string, pricePerM2: number, area: number, district: string) {
    super(name, pricePerM2, area);
    this.district = district;
  }

  override calcCost(): number {
    const baseCost = super.calcCost();
    return baseCost + baseCost * 0.01;
  }
}