import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTwo } from '../Class/arrayTwo';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-two.html',
  styleUrl: './array-two.css'
})
export class ArrayTwoComponent {
  matrixLogic: ArrayTwo = new ArrayTwo();
  isGenerated: boolean = false;

  generate(): void {
    this.matrixLogic.generateAndTransform();
    this.isGenerated = true;
  }
}