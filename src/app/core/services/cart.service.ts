import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _http = inject(HttpClient);

  addToCart(productId: string, qnty: number, userToken: string) {
    return this._http.post('https://flower.elevateegy.com/api/v1/cart', {
      product: productId,
      quantity: qnty
    }, {
      headers: {
        token: userToken

      }
    })

  }
  // getNumOfCartItems() {
  //   return this._http.get('https://flower.elevateegy.com/api/v1/cart').pipe(
  //     map((res: any) => res.numOfCartItems)
  //   )

  }
