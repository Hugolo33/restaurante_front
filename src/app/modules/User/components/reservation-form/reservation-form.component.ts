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
  show: boolean = true;
  showReservation: boolean = true;
  chosenSpot: string = '';



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
  showNoTables: boolean = true;

  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwtService.DecodeToken(this.token)
    /////////////////////////////////////////////
    this.arrShifts = await this.shiftService.getAll();
  }

  async onSubmitDayAndTime() {
    try {
      console.log(this.time);
      let shift_time = (this.time.split('-')[0])
      console.log(shift_time)
      this.arrReservationByDayAndTime = await this.reservationService.postByShiftandDay({ r_date: this.date, time: shift_time });

      for (let reservation of this.arrReservationByDayAndTime) {
        if (reservation.spot_id && reservation.shift_id) {
          this.arrSpotsId.push(reservation.spot_id);
        }
      }

      this.avaibleSpots = await this.spotService.postAllBut({ spotsIds: this.arrSpotsId })
      console.log(this.avaibleSpots);

      this.show = !this.show;
    } catch (error) {
      console.log(error);

    }


  }

  showCreateReservation() {


    this.showReservation = !this.showReservation;

  }


  async onSubmitReservation() {
    console.log(this.chosenSpot) // "4-2"
    let spot_id = Number(this.chosenSpot.split('-')[0])
    let max_seating = Number(this.chosenSpot.split('-')[1])



    let shift_time = Number(this.time.split('-')[0])
    let shift_id = Number(this.time.split('-')[1])

    console.log(shift_id)

    const reservationResult = await this.reservationService.create({ r_date: this.date, diners: max_seating, notes: "PROBANDO PRUEBEZ FRONTON", user_id: this.loggedUser.user_id, spot_id: spot_id, shift_id: shift_id })

    console.log(reservationResult)
    // r_date, diners, notes, user_id, spot_id, shift_id
  }


}
