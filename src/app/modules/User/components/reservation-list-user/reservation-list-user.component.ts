import { Component, inject } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'reservation-list-user',
  templateUrl: './reservation-list-user.component.html',
  styleUrls: ['./reservation-list-user.component.css']
})
export class ReservationListUserComponent {

  reservationsService = inject(ReservationsService)
  arrUserRes!: Reservation[]
  jwtservices = inject(JwtServicesService);
  token: string = "";
  loggedUser!: DecodedToken

  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwtservices.DecodeToken(this.token)
    try {
      this.arrUserRes = await this.reservationsService.getByUserId(this.loggedUser.user_id)
      console.log(this.arrUserRes);// esto hay que comprobarlo
    } catch (error) {
      console.log(error);
    }
  }
}
