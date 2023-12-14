import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  token: string = "";




  onClickReservation() {
    if (this.usersService.isLogged()) {
      this.router.navigate(['user/my-reservations/'])
    } else {
      Swal.fire(
        "Please login to make a reservation",

      )
      this.router.navigate(['/login']);
    }
  }

  onClickLogout() {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--secondary-color)",
      cancelButtonColor: "var(--third-color)",
      confirmButtonText: "Yes, logout!",
      background: "var(--bg-color)",
      color: "var(--main-color)",

    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token')
        this.router.navigate(['/']);
        Swal.fire({
          text: "Succesfully logged out",
          icon: "success",
          confirmButtonColor: "var(--secondary-color)"
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
