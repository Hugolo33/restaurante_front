import { Component } from '@angular/core';
import { Shift } from 'src/app/core/interfaces/shift.interface';

@Component({
  selector: 'app-db-shifts',
  templateUrl: './db-shifts.component.html',
  styleUrls: ['./db-shifts.component.css']
})
export class DbShiftsComponent {
  newShift!: Shift

  onNewShift($event: any) {
    this.newShift = $event
  }

}
