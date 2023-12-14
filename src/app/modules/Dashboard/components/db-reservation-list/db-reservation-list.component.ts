import { Component, inject } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'app-db-reservation-list',
  templateUrl: './db-reservation-list.component.html',
  styleUrls: ['./db-reservation-list.component.css']
})
export class DbReservationListComponent {

  reservationsService = inject(ReservationsService)
  arrReservations: Reservation[];

  constructor() {
    this.arrReservations = [

    ]
  }

  async ngOnInit() {
    try {
      const response = await this.reservationsService.getAll()
      this.arrReservations = response

    } catch (error) {
      console.log(error);

    }
  }

  async cancelReservation(reservation: Reservation) {
    try {
      console.log(reservation.id);
      
      const response = await this.reservationsService.remove(reservation.id!)
      console.log(response);

      const response2 = await this.reservationsService.getAll()
      this.arrReservations = response2
      
    } catch (error) {
      console.log(error);
      
    }
  }


}
