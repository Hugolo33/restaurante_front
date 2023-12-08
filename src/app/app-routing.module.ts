import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/Main/main/main.component';


const routes: Routes = [
  { path: 'main', loadChildren: () => import('./modules/Main/main.routes').then(m => m.routes) },
  { path: 'user', loadChildren: () => import('./modules/User/user.routes').then(m => m.routes) },
  { path: 'dashboard', loadChildren: () => import('./modules/Dashboard/dashboard.routes').then(m => m.routes) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
