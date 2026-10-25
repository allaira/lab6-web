import { Component } from '@angular/core';

@Component({ //декоратор, перетворює клас TypeScript на компонент вебзастосунку
  imports: [], // Список залежностей
  selector: 'app-header', // Тег компонента
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {} // клас шапки (без логіки)
