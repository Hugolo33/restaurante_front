import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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


  constructor() {
    this.formulario = new FormGroup({
      date: new FormControl(),
      first_course: new FormControl(),
      main_course: new FormControl()
    })
  }

  async onSubmit() {
    console.log(this.formulario.value);

    try {
      const response = await this.menuService.create(this.formulario.value)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  async ngOnInit() {
    try {
      const response = await this.menuService.getAll()
      console.log(response);
      this.menus = response
      
    } catch (error) {
      console.log(error);
      
    }
  }

}
