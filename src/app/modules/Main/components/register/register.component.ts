import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
        Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/),

      ]),
      email: new FormControl(null, [
        Validators.pattern(/^[\w.-]+@[\w.-]+.[\w.-]+$/)
      ]),
      phone_number: new FormControl(null, [
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern(/^([0-9])*$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]),
      repite_password: new FormControl(null, [
        Validators.required
      ]),
    }, [
      this.passwordRepeatValidator
    ]);
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

  passwordRepeatValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repitePasswordValue = form.get('repite_password')?.value;

    if (passwordValue === repitePasswordValue) {
      form.get('repite_password')?.setErrors(null);
      return null;
    }

    form.get('repite_password')?.setErrors({ passwordrepeatvalidator: true })
    return { passwordrepeatvalidator: true };
  }

}
