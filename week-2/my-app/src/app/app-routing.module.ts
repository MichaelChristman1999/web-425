import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

{
  path: '',
  component: HomeComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'contact',
  component: ContactComponent,
},


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
