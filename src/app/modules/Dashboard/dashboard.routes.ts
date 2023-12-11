import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DbReservationsComponent } from "./components/db-reservations/db-reservations.component";
import { DbMenuComponent } from "./components/db-menu/db-menu.component";
import { DbShiftsComponent } from "./components/db-shifts/db-shifts.component";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "reservations", component: DbReservationsComponent },
    { path: "menu", component: DbMenuComponent },
    { path: "review", component: DbReservationsComponent },
    { path: "shifts", component: DbShiftsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutes { }