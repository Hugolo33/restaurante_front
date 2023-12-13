import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpotsService } from 'src/app/core/services/spots.service';

@Component({
  selector: 'app-db-spots-new-spot',
  templateUrl: './db-spots-new-spot.component.html',
  styleUrls: ['./db-spots-new-spot.component.css']
})
export class DbSpotsNewSpotComponent {

  spot: FormGroup;

  spotService = inject(SpotsService)

  constructor() {
    this.spot = new FormGroup({
      title: new FormControl(),
      max_seating: new FormControl(),
      details: new FormControl()
    })
  }

  async onSubmit() {
    console.log(this.spot.value)

    try {
      const response = await this.spotService.create(this.spot.value)
      console.log(response);
      

    } catch (error) {
      console.log(error);
      
    }
  }


}
