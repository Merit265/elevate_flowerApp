import { CartService } from './../../core/services/cart.service';
import { Component, inject, OnInit } from "@angular/core";
import { ProductsService } from "../../core/services/products.service";
import { Product } from "../../core/interfaces/products";
import { CutTextPipe } from "../../core/pipe/cut-text.pipe";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import { setUserToken } from "../../store/token.action";


@Component({
  imports: [CutTextPipe , AsyncPipe],
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
  private _cookieService: CookieService , private _CartService:CartService){}

  ngOnInit(): void {

    if (this._cookieService.get('auth_token')!== null) {
      console.log('innnn');

      this.store.dispatch(setUserToken({ userToken: this._cookieService.get('auth_token') || '' }));
    }

    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res

      }
    })

    this.token$ = this.store.select('userToken');





  }

  // addToCart(id:string){
  //   this._CartService.addToCart()


  // }



}