import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { JwtServicesService } from '../services/jwt-services.service';
import { DecodedToken } from '../interfaces/token.interface';


export const authGuardAdmin: CanActivateChildFn = (childRoute, state) => {

    const jwtservices = inject(JwtServicesService);
    const router = inject(Router);
    const token = localStorage.getItem('token');



    if (token) {
        // const user: DecodedToken = jwtservices.DecodeToken(token);
        // console.log(user.role);

        return true
    }

    router.navigate(['/auth', 'login']);
    return false;
};
