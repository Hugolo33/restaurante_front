import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user.routes';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { UserAsideNavComponent } from './components/user-aside-nav/user-aside-nav.component';
import { ReservationListUserComponent } from './components/reservation-list-user/reservation-list-user.component';
import { OneReviewComponent } from './components/one-review/one-review.component';



@NgModule({
    declarations: [
        UserComponent,
        ReviewFormComponent,
        ReservationFormComponent,
        UserAsideNavComponent,
        ReservationListUserComponent,
        OneReviewComponent
    ],
    imports: [
        CommonModule,
        UserRoutes,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class UserModule { }
