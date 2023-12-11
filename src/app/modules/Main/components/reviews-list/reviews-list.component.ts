import { Component, inject } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review.interface';
import { ReviewsService } from 'src/app/core/services/reviews.service';

@Component({
  selector: 'reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent {

  reviewsService = inject(ReviewsService)
  arrReviews!: Review[]

  async ngOnInit() {
    this.arrReviews = await this.reviewsService.getAll()
  }

}
