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

  getByUserId(userId: number): Promise<Reservation[]> {
    return firstValueFrom(this.httpClient.get<Reservation[]>(`${this.baseUrl}/${userId}`))
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
}
