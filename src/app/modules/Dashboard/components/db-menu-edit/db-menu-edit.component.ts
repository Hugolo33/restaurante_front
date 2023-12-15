import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-db-menu-edit',
  templateUrl: './db-menu-edit.component.html',
  styleUrls: ['./db-menu-edit.component.css']
})
export class DbMenuEditComponent {

  formulario: FormGroup;

  menuService = inject(MenuService)

  newMenu!: Menu;

  activatedRoute = inject(ActivatedRoute)

  newMenuId: string = ""

  router = inject(Router)

  constructor() {
    this.formulario = new FormGroup({
      m_date : new FormControl(),
      first_course : new FormControl(),
      main_course : new FormControl(),
      dessert : new FormControl(),
      price : new FormControl()
    })
  }


  async onSubmit() {
    this.activatedRoute.params.subscribe((params) => {
      this.newMenuId = params["menuId"]
    } )
    console.log(this.formulario.value);
    
    this.newMenu = this.formulario.value
    this.newMenu.id = Number(this.newMenuId)
    const response = await this.menuService.update(this.newMenu)
    console.log(response);

    this.router.navigate(["/dashboard/menu"])
    
  }

}
