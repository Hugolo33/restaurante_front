import { Component, inject, signal } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review.interface';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import Swiper from 'swiper';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent {

  reviewsService = inject(ReviewsService)
  arrReviews!: Review[]

  swiperElement = signal<SwiperContainer | null>(null);

  async ngOnInit() {
    try {
      this.arrReviews = await this.reviewsService.getLatestFour()
    } catch (error) {
      console.log(error);
    }



    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      /* pagination: true, */
      loop: true,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1224: {
          slidesPerView: 3,
        },
        1824: {
          slidesPerView: 4,
        },

      }
    };
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();

  }

}
