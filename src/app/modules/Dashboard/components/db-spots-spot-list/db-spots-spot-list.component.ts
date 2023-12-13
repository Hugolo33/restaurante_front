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

  async erase(spot:any) {
    try {
      console.log("esto es spot.id");           
      console.log(spot.id);      

      const response = await this.spotsService.remove(spot.id)
      console.log(response);
      
    } catch (error) {
      console.log(error);      
    }
  }

  async edit(spot:any) {
    try {
      const response = await this.spotsService.update(spot)
      console.log(response);
      
    } catch(error) {
      console.log(error);
      
    }
  }


}
