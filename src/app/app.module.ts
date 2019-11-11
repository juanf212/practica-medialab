import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './myComponents/nav/nav.component';
import { NewsComponent } from './myComponents/news/news.component';
import { CalendarComponent } from './myComponents/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
