import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Spot } from '../interfaces/spot.interface';
import { firstValueFrom } from 'rxjs';
import { Shift } from '../interfaces/shift.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotsService {

  httpClient = inject(HttpClient)
  baseUrl = "http://localhost:3000/api/spots"

  getAll(): Promise<Spot[]> {
    return firstValueFrom(this.httpClient.get<Spot[]>(this.baseUrl))
  }

  create(newSpot: Spot): Promise<Spot> {
    return firstValueFrom(this.httpClient.post<Spot>(this.baseUrl, newSpot))
  } 

  update(updatedSpot: Spot): Promise<Spot> {
    return firstValueFrom(this.httpClient.put<Spot>(`${this.baseUrl}/${updatedSpot.id}`, updatedSpot))
  }

  remove(spotId: number): Promise<Spot> {
    return firstValueFrom(this.httpClient.delete<Spot>(`${this.baseUrl}/${spotId}`))
  }


}
