import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  activatedRoute = inject(ActivatedRoute)
  menuService = inject(MenuService)
  private router = inject(Router)
  currentMenu!: Menu
  arrFirstCourses!: string[]
  arrMainCourses!: string[]
  arrDesserts!: string[]
  date!: string



  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      let menuDate = params['menuDate']
      console.log(menuDate);

      try {
        this.currentMenu = await this.menuService.getByDate(menuDate)
        console.log(this.currentMenu);

        this.arrFirstCourses = this.currentMenu.first_course.split(",")
        this.arrMainCourses = this.currentMenu.main_course.split(",")
        this.arrDesserts = this.currentMenu.dessert.split(",");
      } catch (error) {
        console.log(error);
      }
    })
  }



  async onChangeDate($event: any) {
    let menuDate = $event.target.value
    window.location.href = `/menu/${menuDate}`
    console.log(menuDate);
  }

}
