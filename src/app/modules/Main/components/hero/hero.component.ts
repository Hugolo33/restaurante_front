import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  usersService = inject(UsersService)
  router = inject(Router)


  onClickNav() {

    if (this.usersService.isLogged()) {
      this.router.navigate(['user/my-reservations/my-reservations'])
    } else {
      Swal.fire(
        "Please login to make a reservation"
      )
      this.router.navigate(['/login']);

    }
  }
}
