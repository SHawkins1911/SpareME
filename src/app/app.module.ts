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
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { DetailComponent } from './componets/detail/detail.component';
import { AdminComponent } from './componets/admin/admin.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { UnauthorizedComponent } from './componets/unauthorized/unauthorized.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserComponent,
    StatisticsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    NotFoundComponent,
    UnauthorizedComponent
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
