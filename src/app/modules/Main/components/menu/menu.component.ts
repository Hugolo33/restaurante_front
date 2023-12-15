import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  activatedRoute = inject(ActivatedRoute)
  menuService = inject(MenuService)
  menuDate!: string
  currentMenu!: Menu

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.menuDate = params['menuDate']
    })
    try {
      const result = await this.menuService.getByDate(this.menuDate)
      console.log(result);
      this.currentMenu = result


    } catch (error) {
      console.log(error);
    }


  }


}
