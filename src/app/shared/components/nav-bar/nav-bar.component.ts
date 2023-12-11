import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  private router = inject(Router);

  onClickReservation() {
    Swal.fire(
      "Please login to make a reservation"
    )
    this.router.navigate(['/login']);
  }

}
