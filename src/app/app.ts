import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ApartmentComponent } from './apartment/apartment';

@Component({
  // Ім'я тегу для вставки компонента
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ApartmentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'laba6_angular';
}