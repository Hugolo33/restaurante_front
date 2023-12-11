import { Component, inject } from '@angular/core';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent {

  menuService = inject(MenuService)
  latestMenu!: Menu

  async ngOnInit() {
    this.latestMenu = await this.menuService.getLatest()
    console.log(this.latestMenu);
    //Comprobado, funciona
  }
}
