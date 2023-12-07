import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import { UsersRegisterComponent } from './modules/users/users-register/users-register.component';
import { UsersLoginComponent } from './modules/users/users-login/users-login.component';
import { MenuRegisterComponent } from './modules/menu/menu-register/menu-register.component';
import { MenuViewComponent } from './modules/menu/menu-view/menu-view.component';
import { ReservationRegisterComponent } from './modules/reservations/reservation-register/reservation-register.component';
import { ReservationRequestsComponent } from './modules/reservations/reservation-requests/reservation-requests.component';
import { ReviewsRegisterComponent } from './modules/reviews/reviews-register/reviews-register.component';
import { ReviewsListComponent } from './modules/reviews/reviews-list/reviews-list.component';
import { ShiftRegisterComponent } from './modules/shifts/shift-register/shift-register.component';
import { ShiftListComponent } from './modules/shifts/shift-list/shift-list.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersRegisterComponent,
    UsersLoginComponent,
    MenuRegisterComponent,
    MenuViewComponent,
    ReservationRegisterComponent,
    ReservationRequestsComponent,
    ReviewsRegisterComponent,
    ReviewsListComponent,
    ShiftRegisterComponent,
    ShiftListComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,


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
