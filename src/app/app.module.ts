import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormspageComponent } from './formspage/formspage.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ServicesComponent } from './home/services/services.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { TeamsComponent } from './home/teams/teams.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormspageComponent,
    AboutusComponent,
    ServicesComponent,
    StatisticsComponent,
    TeamsComponent,
    NavbarComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
