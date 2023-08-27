/**
 * Title: sign-in.guard.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 * Assignment 3.4 Assignment Instructions
 */

// Import necessary modules and decorators from Angular.
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

// Define the SignInGuard class, which implements the CanActivate interface.
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}

  // Implement the canActivate method required by the CanActivate interface.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Retrieve the 'isLoggedIn' query parameter from the route.
    let isLoggedIn = next.queryParams.isLoggedIn;

    // Check if the user is authenticated.
    if (isLoggedIn) {
      // Allow navigation to the requested route.
      return true;
    } else {
      // If the user is not authenticated, navigate to the root route ('/') and prevent navigation.
      this.router.navigate(['/']);
      return false;
    }
  }
}
