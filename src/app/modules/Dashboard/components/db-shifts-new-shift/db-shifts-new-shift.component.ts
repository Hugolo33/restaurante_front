import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { ShiftsService } from 'src/app/core/services/shifts.service';

@Component({
  selector: 'app-db-shifts-new-shift',
  templateUrl: './db-shifts-new-shift.component.html',
  styleUrls: ['./db-shifts-new-shift.component.css']
})
export class DbShiftsNewShiftComponent {

  @Output() onNewShift: EventEmitter<Shift> = new EventEmitter()

  shift: FormGroup;

  shiftsService = inject(ShiftsService)

  constructor() {
    this.shift = new FormGroup({
      time: new FormControl(),
      daytime: new FormControl()
    })
  }

  async onSubmit() {
    this.onNewShift.emit(this.shift.value)
    this.shift.reset()
  }


}
