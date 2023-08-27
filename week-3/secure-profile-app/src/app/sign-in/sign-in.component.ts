/**
 * Title: sign-in.component.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary modules from Angular core and Router
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Define the SignInComponent
@Component({
  selector: 'app-sign-in', // Selector used to embed this component in HTML
  templateUrl: './sign-in.component.html', // The HTML template file for this component
  styleUrls: ['./sign-in.component.css'], // The CSS styles for this component
})
export class SignInComponent implements OnInit {
  isLoggedIn = false; // Property to track the login status

  // Constructor with the Router injected for navigation
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signin() {
    this.isLoggedIn = true; // Set the login status to true

    // Navigate to the 'home' route with query parameters and skipping location change
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn }, // Pass the login status as a query parameter
      skipLocationChange: true, // Skip adding this navigation to the browser's history
    });
  }
}
