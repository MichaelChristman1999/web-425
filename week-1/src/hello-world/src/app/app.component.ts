/**
 * Title: app.component.html
 * Author: Jennifer Hoitenga
 * Date: August 7, 2023
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myWorld = "You are now in Jennifer Hoitenga's world!";
}
