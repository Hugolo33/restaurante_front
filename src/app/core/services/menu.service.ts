import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/menu'

  getAll(): Promise<Menu[]> {
    return firstValueFrom(this.httpClient.get<Menu[]>(this.baseUrl))
  }

  getLatest(): Promise<Menu> {
    return firstValueFrom(this.httpClient.get<Menu>(`${this.baseUrl}/latest`))
  }
  // TODO Confirmar que esta es la URL correcta

  getById(menuId: number): Promise<Menu> {
    return firstValueFrom(this.httpClient.get<Menu>(`${this.baseUrl}/${menuId}`))
  }

  create(newMenu: Menu): Promise<Menu> {
    return firstValueFrom(this.httpClient.post<Menu>(this.baseUrl, newMenu))
  }


}
