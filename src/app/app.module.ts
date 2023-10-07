import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { AdminDataComponent } from './admin-data/admin-data.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, LineComponent, BarComponent, PieComponent, AdminDataComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule, HttpClientModule, FormsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
