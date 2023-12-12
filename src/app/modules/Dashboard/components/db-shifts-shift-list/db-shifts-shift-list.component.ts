import { Component, inject } from '@angular/core';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { ShiftsService } from 'src/app/core/services/shifts.service';

@Component({
  selector: 'app-db-shifts-shift-list',
  templateUrl: './db-shifts-shift-list.component.html',
  styleUrls: ['./db-shifts-shift-list.component.css']
})
export class DbShiftsShiftListComponent {

  shifts: Shift[] = []

  shiftsService = inject(ShiftsService)

  async ngOnInit() {
    try {
      const response = await this.shiftsService.getAll()
      console.log(response);
      this.shifts = response

    } catch (error) {
      console.log(error);      
    }
  }

  async erase(shift:any) {
    try {
      console.log("esto es shift.id");           
      console.log(shift.id);      

      const response = await this.shiftsService.remove(shift.id)
      console.log(response);
      
    } catch (error) {
      console.log(error);      
    }
  }

  async edit(shift:any) {
    try {
      const response = await this.shiftsService.update(shift)
      console.log(response);
      
    } catch(error) {
      console.log(error);
      
    }
  }

}
