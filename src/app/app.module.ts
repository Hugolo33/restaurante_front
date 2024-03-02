import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsConditionsComponent } from './modules/Main/components/terms-conditions/terms-conditions.component';
import { CookiesComponent } from './modules/Main/components/cookies/cookies.component';
import { PrivacyPolicyComponent } from './modules/Main/components/privacy-policy/privacy-policy.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TermsConditionsComponent,
    CookiesComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
