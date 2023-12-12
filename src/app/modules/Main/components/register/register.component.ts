import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulario: FormGroup;

  users = inject(UsersService)
  router = inject(Router)

  constructor() {
    //name, email, password, phone_number,role
    this.formulario = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone_number: new FormControl(),
    })
  }

  async onSubmit() {
    try {
      const result = await this.users.create(this.formulario.value)
      console.log(result);
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error);
    }

  }
}
