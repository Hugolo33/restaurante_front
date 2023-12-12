import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'app-db-new-reservation',
  templateUrl: './db-new-reservation.component.html',
  styleUrls: ['./db-new-reservation.component.css']
})
export class DbNewReservationComponent {

  reserva: FormGroup;

  reservationsService = inject(ReservationsService)

  constructor() {
    this.reserva = new FormGroup({
      r_date: new FormControl(),
      diners: new FormControl(),
      notes: new FormControl(),
    })
  }

  async onSubmit() {
    console.log(this.reserva.value)
    this.reserva.value.spot_id = 1
    this.reserva.value.shift_id = 1

    const response = await this.reservationsService.create(this.reserva.value)
    console.log(response);
    
  }

}
