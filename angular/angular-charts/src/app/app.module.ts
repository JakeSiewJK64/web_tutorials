import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChart } from './barchart/barchart';
import { PiechartComponent } from './pie-chart/piechart/piechart.component';

@NgModule({
  declarations: [AppComponent, BarChart, PiechartComponent],
  imports: [BrowserModule, NgChartsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
