/**
 * Title: book-list.component.ts
 * Author: Michael Christman
 * Date: September 9, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 */

// Import necessary modules and interfaces
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>; // Observable to store a list of books
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']; // Header labels for the table
  book: IBook; // Variable to store book details

  constructor(private booksService: BooksService) {
    // Initialize the 'books' Observable with data from the BooksService
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn); // Retrieve book details by ISBN
    console.log(this.book); // Log book details to the console
  }
}
