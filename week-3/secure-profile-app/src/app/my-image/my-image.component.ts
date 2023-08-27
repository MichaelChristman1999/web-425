/**
 * Title: my-image.component.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary modules from Angular core
import { Component, OnInit } from '@angular/core';

// Define the MyImageComponent
@Component({
  selector: 'app-my-image', // Selector used to embed this component in HTML
  templateUrl: './my-image.component.html', // The HTML template file for this component
  styleUrls: ['./my-image.component.css'], // The CSS styles for this component
})
export class MyImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
