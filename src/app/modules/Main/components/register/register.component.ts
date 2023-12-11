import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulario: FormGroup;

  users = inject(UsersService)

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
    const result = await this.users.create(this.formulario.value)
    console.log(result);
  }
}
