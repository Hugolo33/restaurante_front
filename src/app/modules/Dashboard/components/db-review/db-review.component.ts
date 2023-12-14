import { Component, inject } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review.interface';
import { ReviewsService } from 'src/app/core/services/reviews.service';

@Component({
  selector: 'app-db-review',
  templateUrl: './db-review.component.html',
  styleUrls: ['./db-review.component.css']
})
export class DbReviewComponent {

  reviews: Review[] = []
  reviewsService = inject(ReviewsService)

  async ngOnInit() {
    try {
      const response = await this.reviewsService.getAllAdmin()
      console.log(response);
      this.reviews = response


    } catch (error) {
      console.log(error);
    }
  }

  async remove(review: Review) {
    try {
      const response = await this.reviewsService.remove(review.id);
      console.log(response);

    } catch (error) {
      console.log(error);

    }
  }


}
