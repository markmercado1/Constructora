import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'sobre-nosotros', component: AboutUs },
];
