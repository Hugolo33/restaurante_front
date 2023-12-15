import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpotsService } from 'src/app/core/services/spots.service';
import { Router } from '@angular/router';
import { Spot } from 'src/app/core/interfaces/spot.interface';

@Component({
  selector: 'app-db-spots-new-spot',
  templateUrl: './db-spots-new-spot.component.html',
  styleUrls: ['./db-spots-new-spot.component.css']
})
export class DbSpotsNewSpotComponent {

  @Output() onNewSpot: EventEmitter<Spot> = new EventEmitter()

  spot: FormGroup;

  spotService = inject(SpotsService)

  private router = inject(Router)

  constructor() {
    this.spot = new FormGroup({
      title: new FormControl(),
      max_seating: new FormControl(),
      details: new FormControl()
    })
  }

  async onSubmit() {
    console.log(this.spot.value)
    this.onNewSpot.emit(this.spot.value)
    this.spot.reset()

  }


}
