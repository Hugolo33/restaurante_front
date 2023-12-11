import { Component, inject } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'reservation-list-user',
  templateUrl: './reservation-list-user.component.html',
  styleUrls: ['./reservation-list-user.component.css']
})
export class ReservationListUserComponent {

  reservationsService = inject(ReservationsService)
  arrUserRes!: Reservation[]

  ngOnInit() {
    // this.arrUserRes = this.reservationsService.getByUserId()
  }
}
