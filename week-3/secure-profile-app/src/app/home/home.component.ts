/**
 * Title: home.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary modules from Angular core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Define the HomeComponent
@Component({
  selector: 'app-home', // Selector used to embed this component in HTML
  templateUrl: './home.component.html', // The HTML template file for this component
  styleUrls: ['./home.component.css'], // The CSS styles for this component
})
export class HomeComponent implements OnInit {
  isLoggedIn: Boolean; // Property to store the login status
  constructor(private route: ActivatedRoute) {
    // Extract the 'isLoggedIn' query parameter from the route snapshot
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }

  ngOnInit(): void {}
}
