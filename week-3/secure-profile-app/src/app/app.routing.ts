/**
 * Title: app.routing.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary modules for routing
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

// Define the routes for the Angular application
export const AppRoutes: Routes = [
  // Default route points to the SignInComponent
  { path: '', component: SignInComponent },
  // Route for the home page, maps to the HomeComponent
  { path: 'home', component: HomeComponent },
];
