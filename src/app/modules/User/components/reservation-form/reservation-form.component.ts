import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { Spot } from 'src/app/core/interfaces/spot.interface';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import { ShiftsService } from 'src/app/core/services/shifts.service';
import { SpotsService } from 'src/app/core/services/spots.service';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  date: string = "9999-99-99";
  time: string = "00:00:00";



  reservationService = inject(ReservationsService)
  shiftService = inject(ShiftsService)
  spotService = inject(SpotsService);

  jwtService = inject(JwtServicesService)
  loggedUser!: DecodedToken
  token!: string

  arrShifts: Shift[] = []
  arrReservationByDayAndTime: Reservation[] = [];
  arrSpotsId: number[] = [];
  avaibleSpots: Spot[] = [];


  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwtService.DecodeToken(this.token)
    /////////////////////////////////////////////

    this.arrShifts = await this.shiftService.getAll();






  }

  async onSubmitDayAndTime() {
    console.log(this.date, this.time)
    this.arrReservationByDayAndTime = await this.reservationService.postByShiftandDay({ r_date: this.date, time: this.time });

    for (let reservation of this.arrReservationByDayAndTime) {
      if (reservation.spot_id) {
        this.arrSpotsId.push(reservation.spot_id);
      }

    }
    this.avaibleSpots = await this.spotService.postAllBut({ spotsIds: this.arrSpotsId })
    console.log(this.avaibleSpots)
  }

}
