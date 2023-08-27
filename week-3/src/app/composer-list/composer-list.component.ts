/**
 * Title: composer-list.component.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Import necessary Angular modules and classes.
import { Component, OnInit } from '@angular/core'; // Component selector used in HTML templates.
import { IComposer } from '../composer.interface'; // URL to the HTML template file.
import { Composer } from '../composer.class'; // Array of URLs to style files.

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>; // Array to store composer data.

  constructor() {
    // Initialize the composers array by calling the getComposers method from the Composer class.
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}
