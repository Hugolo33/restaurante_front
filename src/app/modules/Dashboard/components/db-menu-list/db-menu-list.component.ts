import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/interfaces/menu.interface';
import { MenuService } from 'src/app/core/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-menu-list',
  templateUrl: './db-menu-list.component.html',
  styleUrls: ['./db-menu-list.component.css']
})
export class DbMenuListComponent {

  menuService = inject(MenuService)

  menus: Menu[] = []

  router = inject(Router)

  mainMenu!: Menu


  async ngOnInit() {
    try {
      const response = await this.menuService.getAll()
      console.log(response);

      this.menus = response
      this.mainMenu = await this.menuService.getMain()

    } catch (error) {
      console.log(error);

    }
  }

  async erase(menu: Menu) {

    Swal.fire({
      title: "¿Quieres eliminar este menú?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "var(--secondary-color)",
      cancelButtonColor: "var(--third-color)",
      reverseButtons: true,
      color: "var(--main-color)",
      background: "var(--bg-color)"

    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await this.menuService.delete(Number(menu.id))

          const response2 = await this.menuService.getAll()
          this.menus = response2

        } catch (error) {
          console.log(error);
        }

        Swal.fire({
          title: "Reserva cancelada",
          icon: "success",
          confirmButtonColor: "var(--secondary-color)",
          color: "var(--main-color)",
          background: "var(--bg-color)"
        });
      }
    });

  }

  async edit(menu: Menu) {
    const id = menu.id?.toString()
    this.router.navigate(["/dashboard/menuedit", id])

  }

  async changeHomeMenu(menuId: number) {
    try {
      const oldMain = await this.menuService.getMain()
      const response = await this.menuService.removeMain(oldMain)
      const newMain = await this.menuService.getById(menuId)
      const response2 = await this.menuService.addMain(newMain)
      this.mainMenu = newMain

    } catch (error) {
      console.log(error);
    }
  }


}
