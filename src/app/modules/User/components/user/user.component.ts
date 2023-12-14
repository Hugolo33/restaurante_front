import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  decodedToken!: DecodedToken
  jwtService = inject(JwtServicesService)
  usersService = inject(UsersService)
  token: string = "";
  userName: string = ""
  loggedUser!: User


  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.decodedToken = this.jwtService.DecodeToken(this.token)
    this.loggedUser = await this.usersService.getById(this.decodedToken.user_id)
    this.userName = this.loggedUser.name
    console.log(this.loggedUser.name);

  }

}
