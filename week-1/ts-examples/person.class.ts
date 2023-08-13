/**
 * Title: person.class.ts
 * Author: Michael Christman
 * Date: August 13th, 2023
 * Sources Used:
 * TypesScript Tutorial for Beginners video by Professor Krasso
 */

import { IPerson } from './person.interface';

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person('Michael', 'Christman');
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
