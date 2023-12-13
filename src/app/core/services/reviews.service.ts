import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/reviews'

  getAll(): Promise<Review[]> {
    return firstValueFrom(this.httpClient.get<Review[]>(this.baseUrl))
  }

  getById(reviewId: number): Promise<Review> {
    return firstValueFrom(this.httpClient.get<Review>(`${this.baseUrl}/${reviewId}`))
  }

  create(newReview: Review): Promise<Review> {
    return firstValueFrom(this.httpClient.post<Review>(this.baseUrl, newReview))
  }

  remove(reviewId: number): Promise<Review> {
    return firstValueFrom(this.httpClient.delete<Review>(`${this.baseUrl}/${reviewId}`))
  }
}