import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutes } from './main.routes';

import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
    declarations: [
        MainComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        MainRoutes,
        ReactiveFormsModule
    ]
})
export class MainModule { }