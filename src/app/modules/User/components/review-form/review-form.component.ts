import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReviewsService } from 'src/app/core/services/reviews.service';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  reviewsService = inject(ReviewsService)
  jwt = inject(JwtServicesService)
  formReview: FormGroup
  token: string = "";
  loggedUser!: DecodedToken

  constructor() {
    this.formReview = new FormGroup({
      rating: new FormControl(),
      content: new FormControl()
    })
  }

  ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.loggedUser = this.jwt.DecodeToken(this.token)
    // FALTA INCLUIR EL ID DE LA RESERVA
  }

  async onSubmit() {
    this.formReview.value.user_id = await this.loggedUser.user_id
    this.reviewsService.create(this.formReview.value)
  }



}
