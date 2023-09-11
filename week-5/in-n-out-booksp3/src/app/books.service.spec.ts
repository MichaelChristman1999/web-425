/**
 * Title: book-details-dialog.component.scss
 * Author: Michael Christman
 * Date: September 9, 2023
 * Sources Used:
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 */

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
