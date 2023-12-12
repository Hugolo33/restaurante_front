import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  users = inject(UsersService)
  router = inject(Router)

  constructor() {

    this.formulario = new FormGroup({

      email: new FormControl(null, [
        Validators.pattern(/^[\w.-]+@[\w.-]+.[\w.-]+$/)
      ]),
      password: new FormControl()

    })
  }

  async onSubmit() {
    try {
      const response = await this.users.postLogin(this.formulario.value)
      console.log(response)
      if (!response.error) {
        localStorage.setItem('token', response.token);
      }
      this.router.navigate(['/user'])
    } catch (error) {
      console.log(error)
    }
  }

  checkError(controlName: string, erroName: string) {
    return this.formulario.get(controlName)?.hasError(erroName) &&
      this.formulario.get(controlName)?.touched
  }
}
