import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-db-menu-reload',
  templateUrl: './db-menu-reload.component.html',
  styleUrls: ['./db-menu-reload.component.css']
})
export class DbMenuReloadComponent {
  
  menus: Menu[] = []

  menuService = inject(MenuService)

  newMenu!: Menu;

  activatedRoute = inject(ActivatedRoute)

  menuId:string = ""

  newDate!:string;

  router = inject(Router)

  async ngOnInit() {
    try {
      this.activatedRoute.params.subscribe((params) => {
        this.menuId = params["menuId"]
      })
      const response = await this.menuService.getById(Number(this.menuId))      
      this.newMenu = response
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async send() {
    this.newMenu.m_date = this.newDate
    const response = await this.menuService.create(this.newMenu)    
    this.router.navigate(["/dashboard/menu"])
  }

}
