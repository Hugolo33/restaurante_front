import { Component, inject } from '@angular/core';
import { Shift } from 'src/app/core/interfaces/shift.interface';
import { ShiftsService } from 'src/app/core/services/shifts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db-shifts-shift-list',
  templateUrl: './db-shifts-shift-list.component.html',
  styleUrls: ['./db-shifts-shift-list.component.css']
})
export class DbShiftsShiftListComponent {

  shifts: Shift[] = []

  shiftsService = inject(ShiftsService)

  router = inject(Router)

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

  edit(shift:any) {
    const id = shift.id.toString()
    this.router.navigate(["dashboard/shifts/edit",id])

    // try {
    //   const response = await this.shiftsService.update(shift)
    //   console.log(response);
      
    // } catch(error) {
    //   console.log(error);
      
    // }
  }

}
