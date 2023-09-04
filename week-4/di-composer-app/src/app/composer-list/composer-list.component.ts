/**
 * Title: composer-list.component.ts
 * Author: Michael Christman
 * Date: September 2nd, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Import necessary Angular modules and classes.
import { Component, OnInit } from '@angular/core'; // Component selector used in HTML templates.
import { IComposer } from '../composer.interface'; // URL to the HTML template file.
import { ComposerService } from '../composer.service'; // Import the 'ComposerService' class.

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>; // Array to store composer data.

  constructor(private composerService: ComposerService) {
    // Inject the ComposerService to fetch the list of composers and initialize the 'composers' array.
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}
