/*
 * Title: base-layout.component.ts
 * Author: Michael Christman
 * Date: September 15, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
    // Initialize the assignment property
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
