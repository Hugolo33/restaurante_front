import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
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
  jwt = inject(JwtServicesService)
  formReview: FormGroup
  token: string = "";
  loggedUser!: DecodedToken
  reservationId!: number

  constructor() {
    this.formReview = new FormGroup({
      rating: new FormControl(),
      content: new FormControl()
    })
  }

  ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwt.DecodeToken(this.token)
    this.activatedRoute.params.subscribe(params => {
      this.reservationId = Number(params)
    });
  }

  async onSubmit() {
    this.formReview.value.user_id = await this.loggedUser.user_id
    this.formReview.value.reservation_id = await this.reservationId
    this.reviewsService.create(this.formReview.value)
    Swal.fire("Thank you for your review!");
    this.router.navigate(['/user/my-reservations'])
    // TODO pendiente de probar que funciona
  }



}
