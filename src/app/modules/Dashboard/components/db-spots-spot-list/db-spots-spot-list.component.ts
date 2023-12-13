import { Component, inject } from '@angular/core';
import { Spot } from 'src/app/core/interfaces/spot.interface';
import { SpotsService } from 'src/app/core/services/spots.service';

@Component({
  selector: 'app-db-spots-spot-list',
  templateUrl: './db-spots-spot-list.component.html',
  styleUrls: ['./db-spots-spot-list.component.css']
})
export class DbSpotsSpotListComponent {

  spots: Spot[] = []

  spotsService = inject(SpotsService)

  async ngOnInit() {
    try {
      const response = await this.spotsService.getAll()
      console.log(response);
      this.spots = response

    } catch (error) {
      console.log(error);      
    }
  }

  async erase(shift:any) {
    try {
      console.log("esto es shift.id");           
      console.log(shift.id);      

      const response = await this.spotsService.remove(shift.id)
      console.log(response);
      
    } catch (error) {
      console.log(error);      
    }
  }

  async edit(shift:any) {
    try {
      const response = await this.spotsService.update(shift)
      console.log(response);
      
    } catch(error) {
      console.log(error);
      
    }
  }


}
