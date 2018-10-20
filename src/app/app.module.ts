import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaunchesComponent } from './launches/launches.component';
import { AppRoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { LaunchUpcomingComponent } from './launch-upcoming/launch-upcoming.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchesComponent,
    LaunchCardComponent,
    LaunchUpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
