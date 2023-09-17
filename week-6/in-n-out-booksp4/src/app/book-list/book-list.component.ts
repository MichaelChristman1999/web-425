/**
 * Title: book-list.component.ts
 * Author: Michael Christman
 * Date: September 8, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Navigation and Layout with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=Wif3MsDN7Pg)
 * Angular Tutorial for Beginners: Data Tables with Angular Material video by Professor Krasso (https://www.youtube.com/watch?v=VvHoy5CtFIE)
 * Assignment 5.4 Dialog Instructions by Professor Krasso
 */

// Import necessary modules and interfaces
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>; // Observable to store a list of books
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']; // Header labels for the table
  book: IBook; // Variable to store book details

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // Initialize the 'books' Observable with data from the BooksService
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn); // Retrieve book details by ISBN

    // Open a dialog to display book details
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });

    console.log(this.book); // Log book details to the console

    // Subscribe to the dialog's afterClosed event to handle confirmation result
    dialogRef.afterClosed().subscribe((result) => {
      // If the result is 'confirm,' reset the book variable (close the dialog)
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
