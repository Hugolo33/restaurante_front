import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { ShiftsService } from 'src/app/core/services/shifts.service';

@Component({
  selector: 'app-db-shifts-new-shift',
  templateUrl: './db-shifts-new-shift.component.html',
  styleUrls: ['./db-shifts-new-shift.component.css']
})
export class DbShiftsNewShiftComponent {

  shift: FormGroup;

  shiftsService = inject(ShiftsService)

  constructor() {
    this.shift = new FormGroup({
      time: new FormControl(),
      daytime: new FormControl()
    })
  }

  async onSubmit() {
    console.log(this.shift.value)

    try {
      const response = await this.shiftsService.create(this.shift.value)
      console.log(response);
      

    } catch (error) {
      console.log(error);
      
    }
  }


}
