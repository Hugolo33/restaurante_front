import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent {

  usersService = inject(UsersService)
  menuService = inject(MenuService)
  private router = inject(Router)
  token: string = "";
  jwtService = inject(JwtServicesService)
  isReservation: boolean = false;
  mainMenu!: Menu
  arrFirstCourses!: string[]
  arrMainCourses!: string[]
  arrDesserts!: string[]
  date!: string

  async ngOnInit() {
    this.mainMenu = await this.menuService.getMain()
    if (!this.mainMenu) {
      this.mainMenu = await this.menuService.getLatest()
    }
    console.log(this.mainMenu);
    this.mainMenu.m_date = dayjs(this.mainMenu.m_date).format('YYYY-MM-DD')
    this.arrFirstCourses = this.mainMenu.first_course.split(",")
    this.arrMainCourses = this.mainMenu.main_course.split(",")
    this.arrDesserts = this.mainMenu.dessert.split(",");
    this.date = this.mainMenu.m_date.slice(0, 5)
    console.log(this.date);

  }

  onClickReservation() {

    if (this.usersService.isLogged()) {
      this.token = localStorage.getItem('token')!;
      const loggedUser = this.jwtService.DecodeToken(this.token)
      if (loggedUser.user_role === 'admin') {
        this.router.navigate(['/dashboard/reservationlist'])
      } else if (loggedUser.user_role === 'client') {
        this.router.navigate(['/user/my-reservations'])
      }
    } else {
      Swal.fire({
        title: "Para realizar una reserva, debes iniciar sesión",
        confirmButtonColor: "var(--secondary-color)",
        color: "var(--main-color)",
        background: "var(--bg-color)"
      })
      this.router.navigate(['/login']);
    }
    this.isReservation = true;
  }
}
