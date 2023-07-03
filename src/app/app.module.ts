import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, MainComponent, HeaderComponent, DashboardComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [MainComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
