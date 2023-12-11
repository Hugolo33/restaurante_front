import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutes } from "./dashboard.routes";
import { DbMenuComponent } from "./components/db-menu/db-menu.component";
import { DbReservationsComponent } from "./components/db-reservations/db-reservations.component";
import { DbReviewComponent } from "./components/db-review/db-review.component";
import { DbShiftsComponent } from "./components/db-shifts/db-shifts.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        DashboardComponent,
        DbMenuComponent,
        DbReservationsComponent,
        DbReviewComponent,
        DbShiftsComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutes,
        ReactiveFormsModule        
    ]
})

export class DashboardModule { }