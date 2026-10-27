import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apartment } from '../Class/apartment';
import { CenterApartment } from '../Class/center-apartment';

@Component({
  selector: 'app-apartment',
  standalone: true, //компонент є автономним
  imports: [CommonModule],
  templateUrl: './apartment.html',
  styleUrl: './apartment.css'
})
export class ApartmentComponent {
  baseApartmentInfo: string = '';
  centerApartmentInfo: string = '';
  calcAverage: string = '';
  errorMessage: string = '';

  calcApartments(name: string, priceStr: string, areaStr: string, district: string) {
    this.errorMessage = '';
    this.baseApartmentInfo = '';
    this.centerApartmentInfo = '';
    this.calcAverage = '';

    if (!name.trim() || !district.trim()) {
      this.errorMessage = 'Будь ласка, заповніть назву житлового комплексу та район!';
      return;
    }

    const price = parseFloat(priceStr);
    const area = parseFloat(areaStr);

    if (isNaN(price) || isNaN(area)) {
      this.errorMessage = 'Ціна та площа повинні бути числовими значеннями!';
      return;
    }

    try {
      const apt = new Apartment(name, price, area);
      const baseCost = apt.calcCost();
      this.baseApartmentInfo = `ЖК "${apt.name}" (Площа: ${apt.area} м², Ціна: ${apt.pricePerM2} $/м²): підсумкова вартість = ${baseCost.toLocaleString()} $`;

      const centerApt = new CenterApartment(name, price, area, district);
      const centerCost = centerApt.calcCost();
      const calcAvg = centerApt.calcAvg();
      const surcharge = centerCost - baseCost;
      this.centerApartmentInfo = `Квартира в центрі (Район: ${centerApt.district}): підсумкова вартість = ${centerCost.toLocaleString()} $ (з них надбавка за центр 1% = +${surcharge.toLocaleString()} $)`;
      this.calcAverage = `${calcAvg}`;
    } catch (err: any) {
      this.errorMessage = err.message || 'Помилка у вхідних даних!';
    }
  }
}