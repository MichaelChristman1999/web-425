/**
 * Title: my-details.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary modules from Angular core
import { Component, OnInit } from '@angular/core';

// Defining a Person class to represent profile information.
export default class Person {
  // Properties to store profile information.
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;

  // An array of keywords associated with the profile.
  keywords = ['#TypeScript, #2020, #CodingWithAngular, #ngOmaha'];

  // Constructor to initialize the profile properties.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // A custom toString method to log profile information.
  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  // Constructor to initialize the profile and log the profile information.
  constructor() {
    // Creating a new Person instance with specific profile details.
    this.myProfile = new Person('Michael Christman', 'Pepperoni Pizza', 'Yellow');
    // Calling the toString method to log the profile information to the console.
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
