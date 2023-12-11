import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../interfaces/token.interface';


@Injectable({
  providedIn: 'root'
})
export class JwtServicesService {

  constructor() { }

  DecodeToken(token: string): DecodedToken {
    return jwtDecode(token);
  }
}
