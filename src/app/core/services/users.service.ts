import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { firstValueFrom } from 'rxjs';


type LoginResponse = { success: string, token: string, error: string };

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://back.mirandabistro.es/api/users'

  getAll(): Promise<User[]> {
    return firstValueFrom(this.httpClient.get<User[]>(this.baseUrl))
  }

  getById(userId: number): Promise<User> {
    return firstValueFrom(this.httpClient.get<User>(`${this.baseUrl}/${userId}`))
  }

  create(newUser: User): Promise<User> {
    return firstValueFrom(this.httpClient.post<User>(this.baseUrl + '/register', newUser))
  }

  postLogin(body: { email: string, password: string }) {


    return firstValueFrom(
      this.httpClient.post<LoginResponse>(this.baseUrl + "/login", body))

  }


  update(updatedUser: User): Promise<User> {
    return firstValueFrom(this.httpClient.put<User>(`${this.baseUrl}/${updatedUser.id}`, updatedUser))
  }

  remove(userId: number): Promise<User> {
    return firstValueFrom(this.httpClient.delete<User>(`${this.baseUrl}/${userId}`))
  }

  isLogged(): boolean {
    if (localStorage.getItem('token')) return true;
    else return false;
  }

}