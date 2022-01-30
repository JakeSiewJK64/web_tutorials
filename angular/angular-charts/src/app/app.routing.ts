import { Routes } from '@angular/router';
import { BarChart } from './barchart/barchart';
import { PiechartComponent } from './pie-chart/piechart/piechart.component';

export const routes: Routes = [
  { path: 'barchart', component: BarChart, pathMatch: 'full' },
  { path: 'piechart', component: PiechartComponent, pathMatch: 'full' },
];
