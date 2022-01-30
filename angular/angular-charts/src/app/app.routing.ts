import { Routes } from '@angular/router';
import { BarChart } from './barchart/barchart';

export const routes: Routes = [
  { path: 'barchart', component: BarChart, pathMatch: 'full' },
];
