import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/Main/main.routes').then(m => m.routes) },
  { path: 'user', loadChildren: () => import('./modules/User/user.routes').then(m => m.routes) },
  { path: 'dashboard', loadChildren: () => import('./modules/Dashboard/dashboard.routes').then(m => m.routes) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
