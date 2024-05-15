import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutes } from './main.routes';

import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuViewComponent } from './components/menu-view/menu-view.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        HeroComponent,
        MenuViewComponent,
        ReviewsListComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        MainRoutes,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }