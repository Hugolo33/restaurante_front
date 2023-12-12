import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  reservationsService = inject(ReservationsService)
  jwtService = inject(JwtServicesService)
  loggedUser!: DecodedToken
  token!: string

  ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwtService.DecodeToken(this.token)
  }



}
