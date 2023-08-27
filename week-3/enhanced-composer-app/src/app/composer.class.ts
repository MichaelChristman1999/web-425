/**
 * Title: composer.class.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

import { IComposer } from './composer.interface';

export class Composer {
  // An array to store composer objects.
  composers: Array<IComposer>;

  /** Initializes a new instance of the Composer class with composer data. */
  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Danny Elfman',
        genre: 'Contemporary Classical',
      },
      {
        composerId: 101,
        fullName: 'Hans Zimmer',
        genre: 'Orchestral',
      },
      {
        composerId: 102,
        fullName: 'John Williams',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Ludovico Einaudi',
        genre: 'Contemporary Classical',
      },
      {
        composerId: 104,
        fullName: 'Hildur Guðnadóttir',
        genre: 'Contemporary Classical',
      },
    ];
  }

  /** Gets the list of composers and returns an array of composer objects */
  getComposers() {
    return this.composers;
  }

  /** Searches through an array of composers and returns the composer object with a matching `composerId`. */
  getComposer(composerId: number) {
    for (let composer of this.composers)
      if (composer.composerId === composerId) {
        return composer;
      }
  }
}
