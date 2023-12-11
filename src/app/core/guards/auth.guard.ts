import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { JwtServicesService } from '../services/jwt-services.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {

    const jwtservices = inject(JwtServicesService);
    const router = inject(Router);
    const token = localStorage.getItem('token');
    if (token) {
        return true
    }

    router.navigate(['/auth', 'login']);
    return false;
};
