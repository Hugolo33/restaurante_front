import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-db-menu-list',
  templateUrl: './db-menu-list.component.html',
  styleUrls: ['./db-menu-list.component.css']
})
export class DbMenuListComponent {

  menuService = inject(MenuService)

  menus: Menu[] = []

  router = inject(Router)




  async ngOnInit() {
    try {
      const response = await this.menuService.getAll()      
      this.menus = response
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async erase(menu: Menu) {
    try {
      const response = await this.menuService.delete(Number(menu.id))
      
      const response2 = await this.menuService.getAll()      
      this.menus = response2
      
    } catch (error) {
      console.log(error);      
    }
  }

  async edit(menu: Menu) {
    
    const id = menu.id?.toString()
    this.router.navigate(["/dashboard/menuedit",id])
    
  }


}
