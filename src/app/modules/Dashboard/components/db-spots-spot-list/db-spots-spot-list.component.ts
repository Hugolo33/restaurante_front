import { Component, Input, inject } from '@angular/core';
import { Spot } from 'src/app/core/interfaces/spot.interface';
import { SpotsService } from 'src/app/core/services/spots.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-spots-spot-list',
  templateUrl: './db-spots-spot-list.component.html',
  styleUrls: ['./db-spots-spot-list.component.css']
})
export class DbSpotsSpotListComponent {

  spots: Spot[] = []

  spotsService = inject(SpotsService)

  private router = inject(Router)

  @Input() newSpot!: Spot

  async ngOnInit() {
    try {
      const response = await this.spotsService.getAll()
      console.log(response);
      this.spots = response

    } catch (error) {
      console.log(error);
    }
  }

  async ngOnChanges() {
    const response = await this.spotsService.create(this.newSpot)
    console.log(response);
    this.spots = await this.spotsService.getAll()

  }

  async erase(spot: Spot) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Quieres eliminar esta mesa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("esto es spot.id");
          console.log(spot.id);

          const response = await this.spotsService.remove(spot.id!)
          console.log(response);

          const response2 = await this.spotsService.getAll()
          this.spots = response2

        } catch (error) {
          console.log(error);
        }
        swalWithBootstrapButtons.fire({
          title: "Mesa eliminada",
          icon: "success"
        });
      }
    });
  }

  async add(spot: any) {
    try {

      spot.max_seating++
      const response = await this.spotsService.update(spot)
      console.log(response);

    } catch (error) {
      console.log(error);

    }
  }

  async subtract(spot: any) {
    try {
      spot.max_seating--
      const response = await this.spotsService.update(spot)
      console.log(response);

    } catch (error) {
      console.log(error);

    }
  }


}
