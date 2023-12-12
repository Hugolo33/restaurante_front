import { Component, inject } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'app-db-reservation-list',
  templateUrl: './db-reservation-list.component.html',
  styleUrls: ['./db-reservation-list.component.css']
})
export class DbReservationListComponent {

arrReservations: Reservation[];

reservationsService = inject(ReservationsService)

constructor() {
  this.arrReservations = [
    {
      r_date : new Date,
      diners : 3,
      notes : "Hola",
      user_id : 5
    },
    {
      r_date : new Date,
      diners : 3,
      notes : "Hello",
      user_id : 5
    },
    {
      r_date : new Date,
      diners : 3,
      notes : "Que tal",
      user_id : 5
    },
    {
      r_date : new Date,
      diners : 3,
      notes : "Hola",
      user_id : 5
    },
    {
      r_date : new Date,
      diners : 3,
      notes : "Hello",
      user_id : 5
    },
    {
      r_date : new Date,
      diners : 3,
      notes : "Que tal",
      user_id : 5
    },
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


}
