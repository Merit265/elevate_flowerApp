import { AuthonService } from './../../../core/services/authon/authon.service';
import {
  CurrencyPipe,
  isPlatformBrowser,
  isPlatformServer,
  UpperCasePipe,
} from '@angular/common';
import {
  afterNextRender,
  afterRender,
  Component,
  Inject,
  inject,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { ProductsService } from '../../../core/services/products.service';
import { Category, Product } from '../../../shared/interfaces/product';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { CategoriesComponent } from '../../../shared/slider-categories/slider-categories.component';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OnsalePipe } from '../../../core/pipes/onsale.pipe';
import { SearchPipe } from '../../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    LoaderComponent,
    FormsModule,
    CategoriesComponent,
    RouterLink,
    CurrencyPipe,
    UpperCasePipe,
    OnsalePipe,
    SearchPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  _productService = inject(ProductsService);
  _AuthonService = inject(AuthonService);
  _ToastrService = inject(ToastrService);

  productSubscription = new Subscription();
  categoriesSubscription = new Subscription();

  isLoading = signal(false);

  searchValue: string = '';

  allProducts: WritableSignal<Product[]> = signal([]);

  allCategories: Category[] = [];

  ngOnInit(): void {
    this.isLoading.set(true);
    this.productSubscription = this._productService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allProducts.set(res.data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.categoriesSubscription = this._productService
      .getAllCategories()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.allCategories = res.data;
        },
        error: () => {},
      });

    this._productService.getLoggerUsercart().subscribe({
      next: (res) => {
        this._productService.numOfCartItems.set(res.numOfCartItems);
      },
    });
  }

  addToCart(id: any) {
    let myToken = localStorage.getItem('token');

    this._productService.addProductToCart(myToken, id).subscribe({
      next: (res) => {
        // console.log(res);
        this._ToastrService.success('produt add to cart');
        this._productService.numOfCartItems.set(res.numOfCartItems);
      },
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();

    this.categoriesSubscription.unsubscribe();
  }
}

// 1-notification
// 2-search - filter by category  pipe
// 3-interceptor
// 4-translation




