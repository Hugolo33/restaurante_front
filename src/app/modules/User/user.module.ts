import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user.routes';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { UserAsideNavComponent } from './components/user-aside-nav/user-aside-nav.component';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { ReservationListUserComponent } from './components/reservation-list-user/reservation-list-user.component';


@NgModule({
    declarations: [
        UserComponent,
        ReviewFormComponent,
        ReservationFormComponent,
        UserAsideNavComponent,
        UserReservationsComponent,
        ReservationListUserComponent
    ],
    imports: [
        CommonModule,
        UserRoutes,
        ReactiveFormsModule
    ]
})
export class UserModule { }
