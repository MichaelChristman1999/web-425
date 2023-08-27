/**
 * Title: app.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import the Component decorator from Angular core
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The selector used to embed this component in HTML
  templateUrl: './app.component.html', // The HTML template file for this component
  styleUrls: ['./app.component.css'], // The CSS styles for this component
})
export class AppComponent {
  // Property to store the assignment title.
  title: string = 'Secure Profile App';
}
