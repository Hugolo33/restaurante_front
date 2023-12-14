import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { DbMenuComponent } from "./components/db-menu/db-menu.component";
import { DbShiftsComponent } from "./components/db-shifts/db-shifts.component";
import { DbReviewComponent } from "./components/db-review/db-review.component";
import { DbNewReservationComponent } from "./components/db-new-reservation/db-new-reservation.component";
import { DbReservationListComponent } from "./components/db-reservation-list/db-reservation-list.component";
import { DbSpotsComponent } from "./components/db-spots/db-spots.component";
import { DbShiftsShiftEditComponent } from "./components/db-shifts-shift-edit/db-shifts-shift-edit.component";
import { DbMenuReloadComponent } from "./components/db-menu-reload/db-menu-reload.component";

const routes: Routes = [
    { path: "", component: DashboardComponent, children:[
        { path: "newreservation", component:DbNewReservationComponent },
        { path: "reservationlist", component: DbReservationListComponent },        
        { path: "menu", component: DbMenuComponent },
        { path: "menureload/:menuId", component: DbMenuReloadComponent },
        { path: "review", component: DbReviewComponent },
        { path: "spots", component: DbSpotsComponent },
        { path: "shifts", component: DbShiftsComponent },
        { path: "shifts/edit/:shiftId", component: DbShiftsShiftEditComponent }
    ] },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutes { }