import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _http = inject(HttpClient);


  getNumOfCartItems(token: any): Observable<any> {
    return this._http.get('https://flower.elevateegy.com/api/v1/cart',
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      }
    ).pipe(
      map((res: any) => res.numOfCartItems)
    )

  }
  getLoggedUserCart(token: any): Observable<any> {
    return this._http.get('https://flower.elevateegy.com/api/v1/cart',
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      })

  }


  addProductToCart(token: any, pId:string, qnty: number) {
    console.log(token);
  
    return this._http.post('https://flower.elevateegy.com/api/v1/cart',
      {
        product: pId, quantity: qnty

      },
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      }



    )


  }


}
