import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayOne } from '../Class/arrayOne';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css'
})

export class ArrayOneComponent {
  arrayLogic: ArrayOne = new ArrayOne();
  errorMessage: string = '';
  isCalculated: boolean = false;

  calculate(inputVal: string): void {
    try {
      this.errorMessage = '';
      this.arrayLogic.processInput(inputVal);
      this.isCalculated = true;
    } catch (err: any) {
      this.isCalculated = false;
      this.errorMessage = err.message || 'Помилка валідації!';
    }
  }
}