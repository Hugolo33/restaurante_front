import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/Main/components/main/main.component';
import { RegisterComponent } from './modules/Main/components/register/register.component';
import { LoginComponent } from './modules/Main/components/login/login.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { UserComponent } from './modules/User/components/user/user.component';
import { HomeComponent } from './modules/Main/home/home.component';
import { HeroComponent } from './modules/Main/hero/hero.component';
import { MenuViewComponent } from './modules/Main/menu-view/menu-view.component';
import { ReviewsListComponent } from './modules/Main/reviews-list/reviews-list.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
