// import { AuthonService } from './../../../core/services/authon/authon.service';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../projects/auth/src/public-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // formGroup >> tag form

  // formControl >> input tag

  registerForm = new FormGroup(
    {
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/.{6,15}$/),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/.{6,15}$/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(\+2)01[01245]\d{8}$/g),
      ]),
      gender: new FormControl(null, [
        Validators.required,

      ]),
    },
    this.confirmPassword
  );

  _AuthonService = inject(AuthService);

  //custom validation
  confirmPassword(f: any) {
    if (f.get('password')?.value === f.get('rePassword')?.value) {
      return null;
    } else {
      return { didntMatch: true };
    }
  }

  signUp(form: any) {
    console.log(form);

    if (form.valid) {

      this._AuthonService.signup(form.value).subscribe({
        next: (resp) => {
          console.log(resp);

        },
        error: (errrr) => {
          console.log(errrr);

        },
        complete: () => { },
      });
    } else {
      console.log('el form invalid');
    }
  }
}
