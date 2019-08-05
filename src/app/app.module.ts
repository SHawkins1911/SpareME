import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsService } from './statistics.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserComponent,
    StatisticsComponent
  ],
imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    UserService,
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
