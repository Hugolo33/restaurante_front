import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';


@Component({
  selector: 'app-db-menu',
  templateUrl: './db-menu.component.html',
  styleUrls: ['./db-menu.component.css']
})
export class DbMenuComponent {

  formulario: FormGroup;

  menuService = inject(MenuService)

  menus: Menu[] = []

  router = inject(Router)




  constructor() {
    this.formulario = new FormGroup({
      m_date: new FormControl(),
      first_course: new FormControl(),
      main_course: new FormControl(),
      dessert: new FormControl(),
      price: new FormControl()
    })
  }

  async onSubmit() {
    console.log(this.formulario.value);

    try {
      const response = await this.menuService.create(this.formulario.value)
      console.log(response);

      const response2 = await this.menuService.getAll()
      this.menus = response2

    } catch (error) {
      console.log(error);

    }

    this.formulario.reset()

  }

  async ngOnInit() {
    try {
      const response = await this.menuService.getAll()
      this.menus = response

    } catch (error) {
      console.log(error);

    }
  }

  send(menu: any) {
    console.log(menu);
    const id = menu.id.toString()
    this.router.navigate(["/dashboard/menureload", id])
  }




}
