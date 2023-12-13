import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutes } from "./dashboard.routes";
import { DbMenuComponent } from "./components/db-menu/db-menu.component";

import { DbReviewComponent } from "./components/db-review/db-review.component";
import { DbShiftsComponent } from "./components/db-shifts/db-shifts.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DbNewReservationComponent } from './components/db-new-reservation/db-new-reservation.component';
import { DbReservationListComponent } from './components/db-reservation-list/db-reservation-list.component';
import { DbShiftsNewShiftComponent } from './components/db-shifts-new-shift/db-shifts-new-shift.component';
import { DbShiftsShiftListComponent } from './components/db-shifts-shift-list/db-shifts-shift-list.component';
import { DbSpotsComponent } from './components/db-spots/db-spots.component';
import { DbSpotsNewSpotComponent } from './components/db-spots-new-spot/db-spots-new-spot.component';
import { DbSpotsSpotListComponent } from './components/db-spots-spot-list/db-spots-spot-list.component';
import { DbAsideComponent } from './components/db-aside/db-aside.component';
import { DbShiftsShiftEditComponent } from './components/db-shifts-shift-edit/db-shifts-shift-edit.component';



@NgModule({
    declarations: [
        DashboardComponent,
        DbMenuComponent,
        DbNewReservationComponent,
        DbReviewComponent,
        DbShiftsComponent,
        DbNewReservationComponent,
        DbReservationListComponent,
        DbShiftsNewShiftComponent,
        DbShiftsShiftListComponent,
        DbSpotsComponent,
        DbSpotsNewSpotComponent,
        DbSpotsSpotListComponent,
        DbAsideComponent,
        DbShiftsShiftEditComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutes,
        ReactiveFormsModule      
    ]
})

export class DashboardModule { }