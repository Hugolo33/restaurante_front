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
  arrFirstCourses!: string[]
  arrMainCourses!: string[]
  arrDesserts!: string[]

  async ngOnInit() {
    this.latestMenu = await this.menuService.getLatest()
    console.log(this.latestMenu);
    //Comprobado, funciona
    this.arrFirstCourses = this.latestMenu.first_course.split(",")
    this.arrMainCourses = this.latestMenu.main_course.split(",")
    this.arrDesserts = this.latestMenu.dessert.split(",")
  }
}
