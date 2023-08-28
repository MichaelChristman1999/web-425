/**
 * Title: app-routing.module.ts
 * Author: Michael Christman
 * Date: August 17, 2023
 * Description: This code is for the routing portion of the composer app project.
 * Sources Used:
 * Angular Tutorial for Beginners video by Professor Krasso
 * Angular Tutorial - Data Binding & *ng Directives by Professor Krasso
 * Bootstrap: https://getbootstrap.com/
 */

// Adding the import statements.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// The routes for the components.
const routes: Routes = [
  { path: '', component: ComposerListComponent },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
