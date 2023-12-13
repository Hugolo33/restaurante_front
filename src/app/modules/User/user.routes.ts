import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReservationListUserComponent } from './components/reservation-list-user/reservation-list-user.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'new-reservation', component: ReservationFormComponent },
    { path: 'my-reservations', component: ReservationListUserComponent },
    { path: 'new-review/:reservationId', component: ReviewFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutes { }