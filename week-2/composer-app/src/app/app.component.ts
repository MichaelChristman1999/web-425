/**
 * Title: app.component.ts
 * Author: Michael Christman
 * Date: August 17, 2023
 * Description: This code defines the main component for the composer app project.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial - Data Binding & *ng Directives by Professor Krasso
 * Bootstrap: https://getbootstrap.com/
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'composer-app';
  /* Adding Assignment Title */
  assignment: string = 'Assignment 2.2: Composer App';
}
