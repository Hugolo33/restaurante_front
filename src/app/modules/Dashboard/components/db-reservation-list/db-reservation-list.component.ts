import { Component, inject } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-reservation-list',
  templateUrl: './db-reservation-list.component.html',
  styleUrls: ['./db-reservation-list.component.css']
})
export class DbReservationListComponent {

  reservationsService = inject(ReservationsService)
  arrFutureReservations!: Reservation[];
  arrPastReservations!: Reservation[];


  async ngOnInit() {
    try {
      this.arrFutureReservations = await this.reservationsService.getAfterToday()
      this.arrPastReservations = await this.reservationsService.getBeforeToday()
      console.log('future', this.arrFutureReservations);

    } catch (error) {
      console.log(error);

    }
  }

  onClickRemove(reservationId: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Quieres cancelar esta reserva?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cancela esta reserva",
      cancelButtonText: "No quiero cancelar mi reserva",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await this.reservationsService.remove(reservationId)
          console.log('response', response);

          this.arrFutureReservations = await this.reservationsService.getAfterToday()
        } catch (error) {
          console.log(error);
        }
        swalWithBootstrapButtons.fire({
          title: "Reservation cancelled",
          icon: "success"
        });
      }
    });
  }


}
