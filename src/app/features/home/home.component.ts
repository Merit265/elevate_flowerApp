import { CartService } from './../../core/services/cart.service';
import { Component, inject, OnInit } from "@angular/core";
import { ProductsService } from "../../core/services/products.service";
import { Product } from "../../core/interfaces/products";
import { CutTextPipe } from "../../core/pipe/cut-text.pipe";
import { Store } from "@ngrx/store";
import { first, Observable, take } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import { setUserToken } from "../../store/token.action";
import { RouterLink } from '@angular/router';
import { setnumOfCartItems } from '../../store/numOfCartItems.action';


@Component({
  imports: [CutTextPipe],
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  productService = inject(ProductsService);
  products: Product[] = [];

  store = inject(Store<{ userToken: string }>);
  token$ !: Observable<string>;

  constructor(
    private _cookieService: CookieService, private _CartService: CartService) { }

  ngOnInit(): void {

    if (this._cookieService.get('auth_token') !== null) {
      console.log('innnn');

      this.store.dispatch(setUserToken({ userToken: this._cookieService.get('auth_token') || '' }));



      this._CartService.getNumOfCartItems(this._cookieService.get('auth_token')).pipe(first()).subscribe({
        next: res => {
          console.log('num of carttt', res);
          this.store.dispatch(setnumOfCartItems({ numOfCartItems: res }));
        }
      })

    }

    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res

      }
    })

    this.token$ = this.store.select('userToken');

  }

  addToCart(id: string, qnty: number) {
    let token$ = '';

    console.log('addddddddddddddd');

    this._CartService.addProductToCart(this._cookieService.get('auth_token'), id, qnty).subscribe(
      {
        next: (res: any) => {
          console.log(res.numOfCartItems);
          this.store.dispatch(setnumOfCartItems({ numOfCartItems: res.numOfCartItems }));

        }
      }
    )


    // this.store.select('userToken').pipe(first()).subscribe({
    //   next: (tokenValue) => {
    //     token$ = tokenValue;



    //   }, complete: () => {
    //     console.log('compelete');

    //   }
    // })



  }



}