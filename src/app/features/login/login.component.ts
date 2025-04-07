import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../projects/auth/src/public-api';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(/.{6,15}$/),
    ]),
  });

  isErrorMsg: boolean = false;
  isLoading: boolean = false;

  _AuthService = inject(AuthService);
  _Router = inject(Router);

  login(form: any) {
    console.log(form);

    if (form.valid) {

      this._AuthService.signIn(form.value).subscribe({
        next: res => { console.log(res); },
        error: err => { console.log(err); }

      })

    }else{
      console.log('not');
      
    }
  }
}
