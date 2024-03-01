import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-db-menu',
  templateUrl: './db-menu.component.html',
  styleUrls: ['./db-menu.component.css']
})
export class DbMenuComponent {

  formulario: FormGroup;

  menuService = inject(MenuService)
  httpClient = inject(HttpClient)
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
    this.formulario.value.first_course = this.formulario.value.first_course.join('-$-')
    this.formulario.value.main_course = this.formulario.value.main_course.join('-$-')
    this.formulario.value.first_dessert = this.formulario.value.dessert.join('-$-')


    console.log(this.formulario.value.first_course);


    try {
      const response = await this.menuService.create(this.formulario.value)
      console.log(response);

      const response2 = await this.menuService.getAll()
      this.menus = response2

      Swal.fire({
        title: "Menú creado con éxito",
        icon: "success",
        confirmButtonColor: "var(--secondary-color)",
        color: "var(--main-color)",
        background: "var(--bg-color)"
      });

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
