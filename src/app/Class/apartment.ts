export class Apartment {
  name: string;
  pricePerM2: number;
  area: number;

  constructor(name: string, pricePerM2: number, area: number) {
    if (pricePerM2 <= 0 || area <= 0) {
      throw new Error('Ціна за 1 м² та площа повинні бути більшими за нуль!');
    }
    this.name = name;
    this.pricePerM2 = pricePerM2;
    this.area = area;
  }

  calcCost(): number {
    return this.pricePerM2 * this.area;
  }
}