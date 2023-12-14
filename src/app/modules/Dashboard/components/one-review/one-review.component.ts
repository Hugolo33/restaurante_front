import { Component, Input, inject } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review.interface';
import { ReviewsService } from 'src/app/core/services/reviews.service';

@Component({
  selector: 'one-review',
  templateUrl: './one-review.component.html',
  styleUrls: ['./one-review.component.css']
})
export class OneReviewComponent {
  reviewsService = inject(ReviewsService)
  @Input() reviewId!: number
  review!: Review | undefined

  async ngOnInit() {
    this.review = await this.reviewsService.getById(this.reviewId)
  }
}
