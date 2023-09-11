/**
 * Title: app.component.ts
 * Author: Michael Christman
 * Date: September 9, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string; // Declare a property for assignment information

  // Constructor method to initialize the assignment property
  constructor() {
    this.assignment = 'Exercise 5.4 - Dialogs';
  }
}
