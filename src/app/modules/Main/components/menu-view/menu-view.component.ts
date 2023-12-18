import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';


@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent {

  menuService = inject(MenuService)
  private router = inject(Router)
  latestMenu!: Menu
  arrFirstCourses!: string[]
  arrMainCourses!: string[]
  arrDesserts!: string[]
  date!: string

  async ngOnInit() {
    this.latestMenu = await this.menuService.getLatest()
    console.log(this.latestMenu);
    this.latestMenu.m_date = dayjs(this.latestMenu.m_date).format('YYYY-MM-DD')
    //Comprobado, funciona
    this.arrFirstCourses = this.latestMenu.first_course.split(",")
    this.arrMainCourses = this.latestMenu.main_course.split(",")
    this.arrDesserts = this.latestMenu.dessert.split(",");
    this.date = this.latestMenu.m_date.slice(0, 5)
    console.log(this.date);

  }
}
