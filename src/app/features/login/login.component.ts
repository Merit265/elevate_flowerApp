import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../projects/auth/src/public-api';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { setUserToken } from '../../store/token.action';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
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
  _cookieService = inject(CookieService);
    store = inject(Store<{ userToken: string }>);

  login(form: any) {
    console.log(form);

    if (form.valid) {

      this._AuthService.signIn(form.value).subscribe({
        next: res => {
          console.log(res);
          this.setToken(res.myToken);
          this.store.dispatch(setUserToken({ userToken: res.myToken }));
          this._Router.navigate(['/home'])
        },
        error: err => { console.log(err); }

      })

    } else {
      console.log('not');

    }
  }

  setToken(token: string): void {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Expires in 1 hour

    console.log(expires, token);


    this._cookieService.set('auth_token', token, expires, '/', '', true, 'Strict');
  }
}
