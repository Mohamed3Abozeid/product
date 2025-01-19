import { Product } from '../interface/product';
import { ProductsService } from './../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  porducts: Product[] = [];
  serchItem: string = '';
  serarchTrem: string = '';
  constructor(private _ProductsService: ProductsService) {
    console.log('constractor work');
  }

  ngOnInit(): void {
    this._ProductsService.prouduct().subscribe({
      next: (response) => {
        console.log('It Work Naw');

        console.log(response);
        this.porducts = response;
      },
      error: (err) => {
        console.log('Have Error');
      },
    });
  }
}
