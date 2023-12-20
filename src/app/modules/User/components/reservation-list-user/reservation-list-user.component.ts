import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'reservation-list-user',
  templateUrl: './reservation-list-user.component.html',
  styleUrls: ['./reservation-list-user.component.css']
})
export class ReservationListUserComponent {

  router = inject(Router)
  reservationsService = inject(ReservationsService)
  arrReservationsBeforeToday!: Reservation[]
  arrReservationsAfterToday!: Reservation[];
  jwtservices = inject(JwtServicesService);
  token: string = "";
  loggedUser!: DecodedToken



  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwtservices.DecodeToken(this.token)
    try {
      this.arrReservationsBeforeToday = await this.reservationsService.getByUserBeforeToday(this.loggedUser.user_id)
      this.arrReservationsAfterToday = await this.reservationsService.getByUserAfterToday(this.loggedUser.user_id)

    } catch (error) {
      console.log(error);
    }

  }

  onClickReview(reservationId: number) {
    this.router.navigate([`/user/new-review/${reservationId}`])
  }

  onClickRemove(reservationId: number) {

    Swal.fire({
      title: "¿Quieres cancelar esta reserva?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cancela mi reserva",
      cancelButtonText: "No quiero cancelar mi reserva",
      reverseButtons: true,
      background: "var(--bg-color)",
      color: "var(--main-color)",
      confirmButtonColor: "var(--secondary-color)",
      cancelButtonColor: "var(--third-color)"
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          const response = await this.reservationsService.remove(reservationId)
          this.arrReservationsAfterToday = await this.reservationsService.getByUserAfterToday(this.loggedUser.user_id)
        } catch (error) {
          console.log(error);
        }
        Swal.fire({
          title: "Reserva cancelada",
          icon: "success",
          confirmButtonColor: "var(--secondary-color)",
          color: "var(--main-color)",
          background: "(--bg-color)"
        });
      }
    });
  }
}
