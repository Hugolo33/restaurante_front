import { Component, Input, inject } from '@angular/core';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { ShiftsService } from 'src/app/core/services/shifts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-shifts-shift-list',
  templateUrl: './db-shifts-shift-list.component.html',
  styleUrls: ['./db-shifts-shift-list.component.css']
})
export class DbShiftsShiftListComponent {

  shifts: Shift[] = []

  shiftsService = inject(ShiftsService)

  private router = inject(Router)

  @Input() newShift!: Shift

  async ngOnInit() {
    try {
      const response = await this.shiftsService.getAll()
      console.log(response);
      this.shifts = response

    } catch (error) {
      console.log(error);
    }
  }

  async ngOnChanges() {

    const response = await this.shiftsService.create(this.newShift)
    console.log(response);
    this.shifts = await this.shiftsService.getAll()
  }

  async erase(shift: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "var(--secondary-color)",
        cancelButton: "var(--third-color)"

      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Quieres eliminar este turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      background: "var(--bg-color)",
      color: "var(--main-color)"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(shift.id);
          const response = await this.shiftsService.remove(shift.id)
          console.log(response);
          this.shifts = await this.shiftsService.getAll()
        } catch (error) {
          console.log(error);
        }
        swalWithBootstrapButtons.fire({
          title: "Reservation cancelled",
          icon: "success",
          confirmButtonColor: "var(--secondary-color)",
          color: "var(--main-color)",
          background: "(--bg-color)"
        });
      }
    });
  }

  edit(shift: any) {
    const id = shift.id.toString()
    this.router.navigate(["dashboard/shifts/edit", id])

    // try {
    //   const response = await this.shiftsService.update(shift)
    //   console.log(response);

    // } catch(error) {
    //   console.log(error);

    // }
  }

}
