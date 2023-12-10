import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user.routes';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';


@NgModule({
    declarations: [
        UserComponent,
        ReviewFormComponent,
        ReservationFormComponent
    ],
    imports: [
        CommonModule,
        UserRoutes,
        ReactiveFormsModule
    ]
})
export class UserModule { }
