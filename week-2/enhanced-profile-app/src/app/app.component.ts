/**
 * Title: app.component.html
 * Author: Michael Christman
 * Date: August 25, 2023
 * Description: This is the main component for the enhanced-profile-app.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial - Data Binding & *ng Directives by Professor Krasso
 * Bootstrap Grid: https://getbootstrap.com/docs/4.0/layout/grid/
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Property to track user's login status.
  isLoggedIn: boolean = true;
  // Property to store the assignment title.
  assignment: string = 'Exercise 2.3 - Data Binding';
}
