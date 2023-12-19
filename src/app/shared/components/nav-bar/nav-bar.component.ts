import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  private router = inject(Router);
  usersService = inject(UsersService)
  jwtService = inject(JwtServicesService)
  activatedRoute = inject(ActivatedRoute)
  token: string = "";
  isReservation: boolean = false;
  public active_fragment: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.activatedRoute.fragment.subscribe((frag: any) => {
      this.active_fragment.next(frag);
      this.isReservation = false;
    });
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

  onClickLogout() {
    Swal.fire({
      title: "¿Quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--secondary-color)",
      cancelButtonColor: "var(--third-color)",
      confirmButtonText: "Sí, cerrar",
      background: "var(--bg-color)",
      color: "var(--main-color)",

    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token')
        this.router.navigate(['/']);
        Swal.fire({
          text: "Has cerrado sesión",
          icon: "success",
          confirmButtonColor: "var(--secondary-color)",
          color: "var(--main-color)",
          background: "var(--bg-color)"
        });
      }
    });
  }

  onClickNavRole() {
    this.token = localStorage.getItem('token')!;
    const loggedUser = this.jwtService.DecodeToken(this.token)
    if (loggedUser.user_role === 'admin') {
      this.router.navigate(['/dashboard/reservationlist'])
    } else if (loggedUser.user_role === 'client') {
      this.router.navigate(['/user/my-reservations'])
    }
  }
}
