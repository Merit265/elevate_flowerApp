import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { BASE_URL } from '../../../../projects/auth/src/lib/base-url.token';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { setUserToken } from '../../store/token.action';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {



  
  }

  private readonly _http = inject(HttpClient);
  private readonly baseUrl = inject(BASE_URL);

  getAllProducts(): Observable<object> {
    return this._http.get('https://flower.elevateegy.com/api/v1/products').pipe(
      map(
        (res: any) => res.products
      )
    )

  }
}
