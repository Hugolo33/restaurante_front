import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  users = inject(UsersService)

  constructor() {

    this.formulario = new FormGroup({

      email: new FormControl(),
      password: new FormControl()

    })
  }

  async onSubmit() {
    const response = await this.users.postLogin(this.formulario.value)
    console.log(response)

    if (!response.error) {
      localStorage.setItem('token', response.token);
    }

  }
}
