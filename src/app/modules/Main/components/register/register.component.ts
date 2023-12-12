import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)
      ]),
      email: new FormControl(null, [
        Validators.pattern(/^[\w.-]+@[\w.-]+.[\w.-]+$/)
      ]),
      password: new FormControl(),
      phone_number: new FormControl(null, [
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern(/^([0-9])*$/)
      ]),
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

  checkError(controlName: string, erroName: string) {
    return this.formulario.get(controlName)?.hasError(erroName) &&
      this.formulario.get(controlName)?.touched
  }



}
