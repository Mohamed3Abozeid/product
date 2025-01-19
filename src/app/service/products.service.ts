import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}
  prouduct(): Observable<any> {
    return this._HttpClient.get(' https://fakestoreapi.com/products');
  }


  productDetails(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}
