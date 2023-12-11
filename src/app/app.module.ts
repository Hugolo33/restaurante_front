import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './modules/Main/register/register.component';
import { LoginComponent } from './modules/Main/login/login.component';
import { HomeComponent } from './modules/Main/home/home.component';
import { HeroComponent } from './modules/Main/hero/hero.component';
import { MenuViewComponent } from './modules/Main/menu-view/menu-view.component';
import { ReviewsListComponent } from './modules/Main/reviews-list/reviews-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeroComponent,
    MenuViewComponent,
    ReviewsListComponent,
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
