/*
 * Title: main.ts
 * Author: Michael Christman
 * Date: September 22, 2023
 * Sources Used: Assignment 6.4 Instructions by Professor Krasso
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
