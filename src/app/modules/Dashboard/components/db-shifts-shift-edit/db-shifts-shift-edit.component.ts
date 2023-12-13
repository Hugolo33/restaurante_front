import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftsService } from 'src/app/core/services/shifts.service';

@Component({
  selector: 'app-db-shifts-shift-edit',
  templateUrl: './db-shifts-shift-edit.component.html',
  styleUrls: ['./db-shifts-shift-edit.component.css']
})
export class DbShiftsShiftEditComponent {

  shiftId:string = ""

  activatedRoute = inject(ActivatedRoute)

  shiftsService = inject(ShiftsService)

  shift: FormGroup;

  router = inject(Router)

  constructor() {
    this.shift = new FormGroup({
      time: new FormControl(),
      daytime: new FormControl()
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params["shiftId"]);
      this.shiftId = params["shiftId"]
    })
  }

  async onSubmit() {
    console.log(this.shift.value)
    console.log(this.shift.value.id = this.shiftId)    

    try {
      const response = await this.shiftsService.update(this.shift.value)
      console.log(response); 
      this.router.navigate(["dashboard", "shifts"])     

    } catch (error) {
      console.log(error);      
    }
  }

}
