import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotsService {

  httpClient = inject(HttpClient)
  baseUrl = "http://localhost:3000/api/shifts"


}
