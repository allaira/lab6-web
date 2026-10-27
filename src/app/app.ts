import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  // Ім'я тегу для вставки компонента
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'laba6_7_angular';
}