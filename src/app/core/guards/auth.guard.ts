import { CanActivateFn, Router } from '@angular/router';
import { JwtServicesService } from '../services/jwt-services.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const jwtservices = inject(JwtServicesService);
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (token) {
    // const admin = jwtservices.DecodeToken(token);
    // console.log(admin.);
    return true
  }

  router.navigate(['/auth', 'login']);
  return false;
};
