/**
 * Title: person.class.ts
 * Author: Jennifer Hoitenga
 * Date: August 7, 2023
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

let myName = new Person('Jennifer', 'Hoitenga');
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
