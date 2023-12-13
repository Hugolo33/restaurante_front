import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Reservation } from '../interfaces/reservation.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/reservations'

  getAll(): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(this.baseUrl))
  }

  getAllOrderByShifts(): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/byshifts`))
  }

  getBeforeToday(): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/before`))
  }

  getByUserBeforeToday(userId: number): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/before/${userId}`))
  }

  getByUserAfterToday(userId: number): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/after/${userId}`))
  }

  getAfterToday(): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/after`))
  }

  getByUserId(userId: number): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/user/${userId}`))
  }

  getById(reservationId: number): Promise<Reservation> {
    return firstValueFrom(this.httpClient.get<Reservation>(`${this.baseUrl}/${reservationId}`))
  }


  postByShiftandDay(body: any): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.post<Reservation[]>(`${this.baseUrl}/byshifts`, body));

  }

  create(newReservation: Reservation): Promise<Reservation> {
    return firstValueFrom(this.httpClient.post<Reservation>(this.baseUrl, newReservation))
  }

  update(reservation: Reservation): Promise<Reservation> {
    return firstValueFrom(this.httpClient.put<Reservation>(`${this.baseUrl}/${reservation.id}`, reservation))
  }

  remove(reservationId: number): Promise<Reservation> {
    return firstValueFrom(this.httpClient.delete<Reservation>(`${this.baseUrl}/${reservationId}`))
  }

  async checkReview(reservationId: number): Promise<boolean> {
    const result: Reservation = await this.getById(reservationId)
    if (result.review_id) return true
    else return false
  }

}
