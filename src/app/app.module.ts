import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/Main/main/main.component';
import { UserComponent } from './modules/User/user/user.component';
import { DashboardComponent } from './modules/Dashboard/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
