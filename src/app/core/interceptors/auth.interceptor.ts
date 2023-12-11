import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    console.log("Pasa por el interceptor")

    const token = localStorage.getItem('token');
    console.log(req)
    if (token) {

        req = req.clone({
            setHeaders: {
                'Authorization': token
            }
        });
    }

    return next(req);
};
