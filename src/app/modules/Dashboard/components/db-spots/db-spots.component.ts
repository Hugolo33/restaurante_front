import { Component } from '@angular/core';
import { Spot } from 'src/app/core/interfaces/spot.interface';

@Component({
  selector: 'app-db-spots',
  templateUrl: './db-spots.component.html',
  styleUrls: ['./db-spots.component.css']
})
export class DbSpotsComponent {

  newSpot!: Spot

  onNewSpot($event: any) {
    this.newSpot = $event
  }
}
