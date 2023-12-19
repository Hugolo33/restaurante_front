import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { Spot } from 'src/app/core/interfaces/spot.interface';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import { ShiftsService } from 'src/app/core/services/shifts.service';
import { SpotsService } from 'src/app/core/services/spots.service';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  date: string = "9999-99-99";
  time: string = "";
  show: boolean = true;
  notes: string = "";
  showReservation: boolean = true;
  chosenSpot: string = '';



  reservationService = inject(ReservationsService)
  shiftService = inject(ShiftsService)
  spotService = inject(SpotsService);
  router = inject(Router);
  userService = inject(UsersService)

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

    // console.log(this.time);
    let shift_time = (this.time.split('-')[0])
    // console.log(shift_time)
    // console.log(this.date);
    let today = new Date();
    let selectedDate = new Date(this.date);

    // console.log(selectedDate.getDate());
    // console.log(selectedDate.getMonth());
    // console.log(selectedDate.getFullYear());
    // console.log(today);
    if (selectedDate >= today && this.time != "" || (selectedDate.getDate() === today.getDate() && selectedDate.getMonth() === today.getMonth() && selectedDate.getFullYear() === today.getFullYear())) {
      try {
        //te traes todas las reservars en esa fecha y hora
        this.arrReservationByDayAndTime = await this.reservationService.postByShiftandDay({ r_date: this.date, time: shift_time });
        console.log(this.arrReservationByDayAndTime);


        for (let reservation of this.arrReservationByDayAndTime) {
          // recorres el array de reservas y guardas el Id de las mesas ocupadas en un array
          if (reservation.spot_id && reservation.shift_id) {
            this.arrSpotsId.push(reservation.spot_id);
            console.log(this.arrSpotsId);
          }
        }
        // si el array de reservas en esa fecha y hora es diferente de 0, es decir, si hay reservas ese dia, te traes las mesas disponibles usando el array de mesas ocupadas como filtro
        if (this.arrReservationByDayAndTime.length !== 0) {
          this.avaibleSpots = await this.spotService.postAllBut({ spotsIds: this.arrSpotsId })

          if (this.avaibleSpots.length === 0) {
            Swal.fire({
              title: "No hay mesas disponibles en el día y hora seleccionados",
              confirmButtonColor: "var(--secondary-color)",
              color: "var(--main-color)",
              background: "var(--bg-color)"
            })

          } else {
            this.show = false;
            this.showReservation = false;
          }

          //si no hay reservas ese dia te traes todas las mesas          
        } else {
          this.avaibleSpots = await this.spotService.getAll();
          this.show = false;
          this.showReservation = false;
        }



      } catch (error) {
        console.log(error);

      }

    } else {

      Swal.fire({
        title: "La fecha es anterior al dia de hoy y/o falta escoger hora.",
        confirmButtonColor: "var(--secondary-color)",
        color: "var(--main-color)",
        background: "var(--bg-color)"
      })
      this.router.navigate(['/user/new-reservation']);

    }




  }

  // showCreateReservation() {


  //   this.showReservation = !this.showReservation;

  // }


  async onSubmitReservation() {
    console.log(this.chosenSpot) // "4-2"
    let spot_id = Number(this.chosenSpot.split('-')[0])
    let max_seating = Number(this.chosenSpot.split('-')[1])




    let shift_id = Number(this.time.split('-')[1])

    let shift_time = (this.time.split('-')[0])

    let today = new Date();
    let selectedDate = new Date(this.date);

    console.log(shift_id)
    if (selectedDate >= today && this.time != "" || (selectedDate.getDate() === today.getDate() && selectedDate.getMonth() === today.getMonth() && selectedDate.getFullYear() === today.getFullYear())) {

      const user = await this.userService.getById(this.loggedUser.user_id);
      const reservationResult = await this.reservationService.create({ r_date: this.date, diners: max_seating, notes: this.notes, user_id: this.loggedUser.user_id, spot_id: spot_id, shift_id: shift_id, email: user.email })

      console.log(reservationResult)
    } else {

      Swal.fire({
        title: "La fecha es anterior al dia de hoy y/o falta escoger hora. No se ha creado la reserva.",
        confirmButtonColor: "var(--secondary-color)",
        color: "var(--main-color)",
        background: "var(--bg-color)"
      })


    }


    // r_date, diners, notes, user_id, spot_id, shift_id
  }


}
