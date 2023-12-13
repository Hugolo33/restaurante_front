import { Component } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';

@Component({
  selector: 'app-db-reservation-list',
  templateUrl: './db-reservation-list.component.html',
  styleUrls: ['./db-reservation-list.component.css']
})
export class DbReservationListComponent {

  arrReservations: Reservation[];

  constructor() {
    this.arrReservations = [

    ]
  }



}
