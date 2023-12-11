import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [

  { path: '', loadChildren: () => import('./modules/Main/main.module').then(m => m.MainModule) },
  { path: 'user', loadChildren: () => import('./modules/User/user.module').then(m => m.UserModule), canActivate: [authGuard] },
  { path: 'dashboard', loadChildren: () => import('./modules/Dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
