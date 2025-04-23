import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { clearUserToken, setUserToken } from '../../../store/token.action';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  _cookieService = inject(CookieService);
  store = inject(Store<{ userToken: string }>);
  _Router = inject(Router);

  logOut() {

    this._cookieService.delete('auth_token');
    this.store.dispatch(clearUserToken({ userToken: '' }));
    this._Router.navigate(['/login'])

  }

 

}
