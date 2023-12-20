import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  reviewsService = inject(ReviewsService)
  reservationsService = inject(ReservationsService)
  jwt = inject(JwtServicesService)
  formReview: FormGroup
  token: string = "";
  loggedUser!: DecodedToken
  reservationId!: number
  currentReservation!: Reservation
  rating: number

  constructor() {
    this.formReview = new FormGroup({
      rating: new FormControl(),
      content: new FormControl()
    })
    this.rating = 5
  }

  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwt.DecodeToken(this.token)
    await this.activatedRoute.params.subscribe(params => {
      this.reservationId = Number(params['reservationId'])
    });
    this.currentReservation = await this.reservationsService.getById(this.reservationId)
  }

  async onSubmit() {
    this.formReview.value.user_id = this.loggedUser.user_id
    this.formReview.value.reservation_id = this.reservationId
    this.formReview.value.rating = this.rating
    const newReview = await this.reviewsService.create(this.formReview.value)
    console.log(newReview);

    this.currentReservation.review_id = newReview.id
    this.currentReservation.r_date = this.currentReservation.r_date.slice(0, 10)
    const result = await this.reservationsService.update(this.currentReservation)
    console.log(result);

    Swal.fire({
      title: "¡Gracias por tu reseña!",
      icon: "success",
      confirmButtonColor: "var(--secondary-color)",
      color: "var(--main-color)",
      background: "var(--bg-color)"
    });
    this.router.navigate(['/user/my-reservations'])
  }

  onChangeRating($event: any) {
    this.rating = $event.target.value
  }


}
