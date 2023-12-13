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
  arrUserRes!: Reservation[]
  //TODO ESTE ARRAY REALMENTE DEBEN SER DOS DISTINTOS, uno de reservas futuras y otro de reservas pasadas
  jwtservices = inject(JwtServicesService);
  token: string = "";
  loggedUser!: DecodedToken


  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwtservices.DecodeToken(this.token)
    try {
      this.arrUserRes = await this.reservationsService.getByUserId(this.loggedUser.user_id)
      console.log(this.arrUserRes);// esto hay que comprobarlo
    } catch (error) {
      console.log(error);
    }
  }

  onClickReview(reservationId: number) {
    this.router.navigate([`/user/new-review/${reservationId}`])
  }

  async onClickUpdate(reservationId: number) {
    // const response = await this.reservationsService.update(reservationId)
    // TODO definir cómo vamos a hacer este método
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
      title: "Do you want to cancel this reservation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel my reservation",
      cancelButtonText: "I don't want to cancel my reservation",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          const response = await this.reservationsService.remove(reservationId)
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
