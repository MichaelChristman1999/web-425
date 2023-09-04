/**
 * Title: app.module.ts
 * Author: Michael Christman
 * Date: September 2nd, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Import the BrowserModule for running the application in a web browser environment.
import { BrowserModule } from '@angular/platform-browser';
// Import the NgModule decorator for defining Angular modules.
import { NgModule } from '@angular/core';
// Import the AppRoutingModule, which provides routing configuration.
import { AppRoutingModule } from './app-routing.module';
// Import the root component of the application.
import { AppComponent } from './app.component';
// Import the ComposerListComponent.
import { ComposerListComponent } from './composer-list/composer-list.component';
// Import the ContactComponent.
import { ContactComponent } from './contact/contact.component';
// Import the AboutComponent.
import { AboutComponent } from './about/about.component';
// Import the ComposerDetailsComponent.
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
// Import the RouterModule for handling routing.
import { RouterModule } from '@angular/router';

@NgModule({
  // List of component classes to be declared in this module.
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerDetailsComponent,
  ],

  // List of external modules to be imported and used in this module.
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
