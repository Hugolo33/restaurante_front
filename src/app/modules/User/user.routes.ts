import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'reservation', component: ReservationFormComponent },
    { path: 'new-review', component: ReviewFormComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutes { }