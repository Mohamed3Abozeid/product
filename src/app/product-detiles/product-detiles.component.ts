import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detiles',
  templateUrl: './product-detiles.component.html',
  styleUrls: ['./product-detiles.component.css'],
})
export class ProductDetilesComponent implements OnInit {
  id: any = '';

  productDetails: Product = {} as Product;
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (response) => {
        console.log(response.get('id'));
        this.id = response.get('id');
      },

      error: (err) => {
        console.log('We Have Eror');
      },
    });

    this._ProductsService.productDetails(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.productDetails = data;
      },
    });
  }
}
