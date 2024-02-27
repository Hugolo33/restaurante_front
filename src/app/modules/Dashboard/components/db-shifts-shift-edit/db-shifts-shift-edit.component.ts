import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { ShiftsService } from 'src/app/core/services/shifts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-shifts-shift-edit',
  templateUrl: './db-shifts-shift-edit.component.html',
  styleUrls: ['./db-shifts-shift-edit.component.css']
})
export class DbShiftsShiftEditComponent {

  shiftId: string = ""
  activatedRoute = inject(ActivatedRoute)
  shiftsService = inject(ShiftsService)
  currentShift!: Shift
  updatedShift: FormGroup;
  router = inject(Router)

  constructor() {
    this.updatedShift = new FormGroup({
      time: new FormControl(),
      daytime: new FormControl()
    })
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params["shiftId"]);
      this.shiftId = params["shiftId"]
    })
    this.currentShift = await this.shiftsService.getById(Number(this.shiftId))
    console.log(this.currentShift);
    this.updatedShift = new FormGroup({
      time: new FormControl(this.currentShift.time),
      daytime: new FormControl(this.currentShift.daytime)
    })
  }

  async onSubmit() {
    console.log(this.updatedShift.value)
    console.log(this.updatedShift.value.id = this.shiftId)

    try {
      const response = await this.shiftsService.update(this.updatedShift.value)
      console.log(response);

      Swal.fire({
        title: "Turno editado con éxito",
        icon: "success",
        confirmButtonColor: "var(--secondary-color)",
        color: "var(--main-color)",
        background: "var(--bg-color)"
      });

      this.router.navigate(["dashboard", "shifts"])

    } catch (error) {
      console.log(error);
    }
  }

}
