import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutes } from './main.routes';

import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuViewComponent } from './components/menu-view/menu-view.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';



@NgModule({
    declarations: [
        MainComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        HeroComponent,
        MenuViewComponent,
        ReviewsListComponent
    ],
    imports: [
        CommonModule,
        MainRoutes,
        ReactiveFormsModule
    ]
})
export class MainModule { }