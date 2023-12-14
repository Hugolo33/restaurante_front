import { Component, inject } from '@angular/core';
import { DecodedToken } from 'src/app/core/interfaces/token.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  decodedTokem!: DecodedToken
  jwtService = inject(JwtServicesService)
  usersService = inject(UsersService)
  token: string = "";
  userName: string = ""
  loggedUser!: User



  async ngOnInit() {
    this.token = localStorage.getItem('token')!;
    this.decodedTokem = this.jwtService.DecodeToken(this.token)
    this.loggedUser = await this.usersService.getById(this.decodedTokem.user_id)
    this.userName = this.loggedUser.name
    console.log(this.loggedUser.name);

  }


}
