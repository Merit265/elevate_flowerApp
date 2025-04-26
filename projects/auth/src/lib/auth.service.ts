import { Adaptor } from './interface/adaptor';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthApi } from './base/AuthApi';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthEndPoints } from './enums/Auth.endPoints'
import { AdaptorService } from './adaptor/adaptor.adaptor';
import { ForgetPassData, LoginData, RegisterData } from './interface/LoginData';
import { LoginRes } from './interface/LoginRes';
import { BASE_URL } from './base-url.token';
import { Store } from '@ngrx/store';
import { setUserToken } from '../../../../src/app/store/token.action';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthApi {

  baseUrl = inject(BASE_URL);
  constructor(
    private http: HttpClient,
    private _AdaptorService: AdaptorService,
) {

  }


  signIn(data: LoginData): Observable<any> {

    return this.http.post(`${this.baseUrl}auth/${AuthEndPoints.signin}`, data).
      pipe(
        map((res: any) => this._AdaptorService.adapt(res)),
        // catchError(err => {

        //   let newErr = 'fe 7aga 8ltttttttttttt'

        //  return of(newErr)
        // })
      )

  }

  signup(data: RegisterData): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/${AuthEndPoints.signup}`, data).pipe(
      map((res: any) => { return this._AdaptorService.adapt(res) })
    )

  }


  forgotPassword(data: ForgetPassData): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/${AuthEndPoints.forgotPassword}`, data).pipe(
      map((res: any) => { return this._AdaptorService.adaptforgetPassMsg(res) })
    )
  }


}
