/**
 * Title: book.service.ts
 * Author: Michael Christman
 * Date: September 8, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 */

// Import necessary modules and interfaces
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // Initialize an array of book objects
  books: Array<IBook>;
  constructor() {
    this.books = [
      // Book objects
      {
        isbn: '0307588378',
        title: 'Gone Girl',
        description:
          'A gripping psychological thriller that unravels the dark and twisted secrets of a seemingly perfect marriage when the wife mysteriously disappears, with unexpected twists and turns that will keep you on the edge of your seat.',
        numOfPages: 422,
        authors: ['Gillian Flynn'],
      },
      {
        isbn: '1613473079',
        title: 'We Have Always Lived in the Castle',
        description:
          'Taking readers deep into a labyrinth of dark neurosis, We Have Always Lived in the Castle is a deliciously unsettling novel about a perverse, isolated, and possibly murderous family and the struggle that ensues when a cousin arrives at their estate. ',
        numOfPages: 146,
        authors: ['Shirley Jackson'],
      },
      {
        isbn: '0486282112',
        title: 'Frankenstein',
        description:
          'A classic novel that explores the moral and ethical consequences of scientific experimentation through the tragic story of Victor Frankenstein and the creature he brings to life.',
        numOfPages: 166,
        authors: ['Mary Shelley'],
      },
      {
        isbn: '0307742482',
        title: 'Killers of the Flower Moon',
        description:
          'A gripping true crime narrative that delves into the chilling and disturbing murders of Osage Native Americans in the 1920s, revealing a web of greed, conspiracy, and the birth of the FBI',
        numOfPages: 416,
        authors: ['David Grann'],
      },
      {
        isbn: '0553381687',
        title: 'A Game of Thrones',
        description:
          'The first book in the epic fantasy series "A Song of Ice and Fire," featuring a sprawling cast of characters and a complex political and magical world where power struggles and intrigue abound.',
        numOfPages: 704,
        authors: ['George R.R. Martin'],
      },
    ];
  }

  // Retrieve a list of books as an Observable
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Retrieve a specific book by ISBN
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
