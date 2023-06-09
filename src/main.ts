import 'zone.js/dist/zone';
import { Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
enableProdMode();
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModule],
  template: `
    <app-root><app-root>
  `,
})
export class App {}

bootstrapApplication(App);
