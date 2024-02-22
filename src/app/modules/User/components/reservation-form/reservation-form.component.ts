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
import * as dayjs from 'dayjs';
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



  usersService = inject(UsersService);
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

    this.arrShifts = await this.shiftService.getAll();


  }

  async onSubmitDayAndTime() {

    try {
      let shift_time = (this.time.split('-')[0])

      let today = new Date();
      let selectedDate = new Date(this.date);

      let shiftDateTime = dayjs().hour(Number(shift_time.split(':')[0]))

      if (selectedDate > today && this.time != "" || (selectedDate.getDate() === today.getDate() && selectedDate.getMonth() === today.getMonth() && selectedDate.getFullYear() === today.getFullYear() && this.time != "" && shiftDateTime.isAfter(dayjs()))) {

        //te traes todas las reservars en esa fecha y hora
        this.arrReservationByDayAndTime = await this.reservationService.postByShiftandDay({ r_date: this.date, time: shift_time });

        this.arrSpotsId = []
        for (let reservation of this.arrReservationByDayAndTime) {
          // recorres el array de reservas y guardas el Id de las mesas ocupadas en un array
          if (reservation.spot_id && reservation.shift_id) {

            this.arrSpotsId.push(reservation.spot_id);
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
            this.showReservation = true;
            this.show = true;

          } else {
            // muestras las mesas y la opcion de reservar
            this.show = false;
            this.showReservation = false;
          }

          //si no hay reservas ese dia te traes todas las mesas          
        } else {
          this.avaibleSpots = await this.spotService.getAll();
          this.show = false;
          this.showReservation = false;
        }

      } else {

        Swal.fire({
          title: "La fecha es anterior al dia de hoy y/o falta escoger una hora válida.",
          confirmButtonColor: "var(--secondary-color)",
          color: "var(--main-color)",
          background: "var(--bg-color)"
        })
        this.show = true;
        this.showReservation = true;
      }

    } catch (error) {
      console.log(error);

    }
  }


  async onSubmitReservation() {
    try {
      let spot_id = Number(this.chosenSpot.split('-')[0])
      let max_seating = Number(this.chosenSpot.split('-')[1])

      let shift_id = Number(this.time.split('-')[1])

      let today = new Date();
      let selectedDate = new Date(this.date);
      const user = await this.userService.getById(this.loggedUser.user_id);



      if (selectedDate >= today && this.time != "" && this.chosenSpot != "" || (selectedDate.getDate() === today.getDate() && selectedDate.getMonth() === today.getMonth() && selectedDate.getFullYear() === today.getFullYear() && this.time != "" && this.chosenSpot != "")) {



        const reservationResult = await this.reservationService.create({ r_date: this.date, diners: max_seating, notes: this.notes, user_id: this.loggedUser.user_id, spot_id: spot_id, shift_id: shift_id, email: user.email })


      } else {

        Swal.fire({
          title: "Datos de fecha, hora o mesa incorrectos. No se ha creado la reserva.",
          confirmButtonColor: "var(--secondary-color)",
          color: "var(--main-color)",
          background: "var(--bg-color)"
        })


      }
    } catch (error) {
      Swal.fire({
        title: "Datos de fecha, hora o mesa incorrectos. No se ha creado la reserva.",
        confirmButtonColor: "var(--secondary-color)",
        color: "var(--main-color)",
        background: "var(--bg-color)"
      })
    }


  }


}
