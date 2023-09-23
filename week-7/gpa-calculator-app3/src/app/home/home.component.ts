/*
 * Title: home.component.ts
 * Author: Michael Christman
 * Date: September 22, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript; // Holds a single transcript entry
  selectableGrades: Array<string> = [
    // List of selectable grades
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = []; // List of transcript entries
  gpaTotal: number = 0; // Total GPA value
  constructor() {
    this.transcriptEntry = {} as ITranscript; // Initialize transcript entry
  }

  ngOnInit(): void {}

  // Function to save a transcript entry
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  // Function to calculate GPA based on transcript entries
  calculateResults() {
    let gpa: number = 0;

    // Calculate GPA based on grades
    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        default:
          gpa += 0.0;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // Function to clear all transcript entries and reset GPA
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
